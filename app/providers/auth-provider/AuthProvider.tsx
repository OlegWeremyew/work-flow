import type { IUser } from '@/types'
import * as Splash from 'expo-splash-screen'
import {
	Dispatch,
	FC,
	PropsWithChildren,
	SetStateAction,
	createContext,
	useEffect,
	useState,
} from 'react'

export type TypeUserState = IUser | null

export interface IContext {
	user: TypeUserState
	setUser: Dispatch<SetStateAction<TypeUserState>>
}

export const AuthContext = createContext({} as IContext)

let ignore = Splash.preventAutoHideAsync()

export const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [user, setUser] = useState<TypeUserState>({} as IUser)

	useEffect(() => {
		let isMounted = false

		const getUserFromStorage = async () => {
			if (isMounted) {
				// get user from async storage and write to store
			}

			await Splash.hideAsync()
		}

		let ignore = getUserFromStorage()

		return () => {
			isMounted = false
		}
	}, [])

	return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>
}
