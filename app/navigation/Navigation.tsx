import { BottomMenu } from '@/components'
import { useAuth } from '@/hooks'
import PrivateNavigation from '@/navigation/PrivateNavigation'
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native'
import { FC, useEffect, useState } from 'react'

export const Navigation: FC = () => {
	const { user } = useAuth()

	const [currentRoute, setCurrentRoute] = useState<string | undefined>(undefined)

	const navRef = useNavigationContainerRef()

	useEffect(() => {
		setCurrentRoute(navRef.getCurrentRoute()?.name)

		const listener = navRef.addListener('state', () => {
			return setCurrentRoute(navRef.getCurrentRoute()?.name)
		})

		return () => {
			navRef.removeListener('state', listener)
		}
	}, [])

	return (
		<>
			<NavigationContainer ref={navRef}>
				<PrivateNavigation />
			</NavigationContainer>
			{user && currentRoute && (
				<BottomMenu nav={navRef.navigate} currentRoute={currentRoute} />
			)}
		</>
	)
}
