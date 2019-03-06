import React from 'react'
import { View, Button } from 'react-native'

export const AllBooksTab = ({ navigation }) => (
    <View>
        <Button
            onPress={() => navigation.navigate('Authors')}
            title="Go to Authors"
        />
        <Button
            onPress={() => navigation.navigate('NonfictionBooksTab')}
            title="Go to NonfictionBooksTab"
        />
        <Button onPress={() => navigation.openDrawer()} title="Open Drawer" />
    </View>
)

export const FictionBooksTab = () => (
    <View>
    </View>
)

export const NonfictionBooksTab = () => (
    <View>
    </View>
)