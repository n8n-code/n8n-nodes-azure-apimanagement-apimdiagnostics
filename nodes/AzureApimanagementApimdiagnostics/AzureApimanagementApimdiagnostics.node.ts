import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureApimanagementApimdiagnostics implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Apimanagement Apimdiagnostics',
                name: 'N8nDevAzureApimanagementApimdiagnostics',
                icon: { light: 'file:./azure-apimanagement-apimdiagnostics.png', dark: 'file:./azure-apimanagement-apimdiagnostics.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Use REST APIs to manage Diagnostic entities in Azure API Management for logging proxy requests/responses.',
                defaults: { name: 'Azure Apimanagement Apimdiagnostics' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureApimanagementApimdiagnosticsApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
