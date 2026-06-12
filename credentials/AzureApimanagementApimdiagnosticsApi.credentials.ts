import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureApimanagementApimdiagnosticsApi implements ICredentialType {
        name = 'N8nDevAzureApimanagementApimdiagnosticsApi';

        displayName = 'Azure Apimanagement Apimdiagnostics API';

        icon: Icon = { light: 'file:../nodes/AzureApimanagementApimdiagnostics/azure-apimanagement-apimdiagnostics.png', dark: 'file:../nodes/AzureApimanagementApimdiagnostics/azure-apimanagement-apimdiagnostics.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Apimanagement Apimdiagnostics API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
