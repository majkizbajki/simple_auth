import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import { AuthScreen } from '../screens/AuthScreen';
import { ArticlesScreen } from '../screens/ArticlesScreen';

export type RootStackParamList = {
    ArticlesScreen: undefined;
    AuthScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
    const [initialRoute, setInitialRoute] = useState<keyof RootStackParamList>('AuthScreen');

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={initialRoute} screenOptions={{ headerShown: false }}>
                <Stack.Screen name="AuthScreen" component={AuthScreen} />
                <Stack.Screen name="ArticlesScreen" component={ArticlesScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
