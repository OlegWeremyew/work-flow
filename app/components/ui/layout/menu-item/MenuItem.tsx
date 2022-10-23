import { AppConstantsColors } from '@/app.constants'
import type {
	IMenuItem,
	TypeNav,
} from '@/components/ui/layout/bottom-menu/menu.interface'
import { Feather } from '@expo/vector-icons'
import { FC } from 'react'
import { Pressable } from 'react-native'

interface IMenuItemProps {
	item: IMenuItem
	nav: TypeNav
	currentRoute?: string
}

export const MenuItem: FC<IMenuItemProps> = ({ item, nav, currentRoute }) => {
	const isActive = currentRoute === item.path

	return (
		<Pressable className='w-[24%] items-center' onPress={() => nav(item.path)}>
			<Feather
				name={item.iconName}
				size={25}
				color={isActive ? AppConstantsColors.primary : '#8D8A97'}
			/>
		</Pressable>
	)
}
