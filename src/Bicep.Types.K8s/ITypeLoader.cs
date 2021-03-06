// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
using System.Collections.Generic;
using Azure.Bicep.Types.K8s.Index;
using Azure.Bicep.Types.Concrete;

namespace Azure.Bicep.Types.K8s
{
    public interface ITypeLoader
    {
        ResourceType LoadResourceType(TypeLocation location);

        TypeIndex GetIndexedTypes();
    }
}