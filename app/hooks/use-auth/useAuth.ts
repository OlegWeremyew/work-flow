import { AuthContext, IContext } from '@/providers'
import { useContext } from 'react'

export const useAuth = (): IContext => {
	return useContext(AuthContext)
}
