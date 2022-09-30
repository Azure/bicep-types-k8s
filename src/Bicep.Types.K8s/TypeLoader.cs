// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
using Azure.Bicep.Types.K8s.Index;
using Azure.Bicep.Types.Concrete;

namespace Azure.Bicep.Types.K8s
{
    public class TypeLoader : ITypeLoader
    {
        private const string TypeContainerName = "types.json";
        private const string TypeIndexResourceName = "index.json";

        public ResourceType LoadResourceType(TypeLocation typeLocation)
        {
            using (var contentStream = GetContentStreamAtPath(typeLocation.RelativePath))
            {
                var types = TypeSerializer.Deserialize(contentStream);
                if (typeLocation.Index is not int intIndex || types[intIndex] is not ResourceType resourceType)
                {
                    throw new ArgumentException($"Unable to locate resource type at index {typeLocation.Index} in \"{typeLocation.RelativePath}\" resource");
                }

                return resourceType;
            }
        }

        public string GetContentAtPath(string? path)
        {
            _ = path ?? throw new ArgumentNullException(nameof(path));

            using (var decompressStream = GetContentStreamAtPath(path))
            using (var streamReader = new StreamReader(decompressStream))
            {
                return streamReader.ReadToEnd();
            }
        }

        public TypeIndex GetIndexedTypes()
        {
            using (var contentStream = GetContentStreamAtPath(TypeIndexResourceName))
            {
                return TypeIndexer.DeserializeIndex(contentStream);
            }
        }

        private Stream GetContentStreamAtPath(string? path)
        {
            _ = path ?? throw new ArgumentNullException(nameof(path));

            var fileStream = typeof(TypeLoader).Assembly.GetManifestResourceStream($"{path}.deflated");
            if (fileStream is null)
            {
                throw new ArgumentException($"Unable to locate manifest resource at path {path}", nameof(path));
            }

            return new DeflateStream(fileStream, CompressionMode.Decompress);
        }
    }
}