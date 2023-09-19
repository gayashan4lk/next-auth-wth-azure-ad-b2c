import { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import AzureADB2CProvider from 'next-auth/providers/azure-ad-b2c'

export const options: NextAuthOptions = {
	providers: [
		GitHubProvider({
			clientId: process.env.GITHUB_ID as string,
			clientSecret: process.env.GITHUB_SECRET as string
		}),
		AzureADB2CProvider({
			tenantId: process.env.AZURE_AD_B2C_TENANT_NAME as string,
			clientId: process.env.AZURE_AD_B2C_CLIENT_ID as string,
			clientSecret: process.env.AZURE_AD_B2C_CLIENT_SECRET as string,
			primaryUserFlow: process.env.AZURE_AD_B2C_PRIMARY_USER_FLOW as string,
			authorization: { params: { scope: 'offline_access openid' } }
		})
	]
}
