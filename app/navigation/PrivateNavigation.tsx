import { Auth } from '@/components'
import { useAuth } from '@/hooks'
import { TypeRootStackParamList } from '@/navigation/navigation.types'
import { routes } from '@/navigation/routes'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FC } from 'react'
import { Text } from 'react-native'

const Stack = createNativeStackNavigator<TypeRootStackParamList>()

const PrivateNavigation: FC = () => {
	const { user } = useAuth()
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				contentStyle: {
					backgroundColor: '#1E1C2E',
				},
			}}
		>
			{user ? (
				routes.map(route => <Stack.Screen key={route.name} {...route} />)
			) : (
				<Stack.Screen name='Auth' component={Auth} />
			)}
			<Text>PrivateNavigation</Text>
		</Stack.Navigator>
	)
}

export default PrivateNavigation
