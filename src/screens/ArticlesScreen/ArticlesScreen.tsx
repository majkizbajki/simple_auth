import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, SafeAreaView, Text } from 'react-native';
import { RootStackParamList } from '../../navigation';

export const ArticlesScreen = () => {
    const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <SafeAreaView>
            <Text>Articles Screen</Text>
            <Button onPress={() => navigate('AuthScreen')} title="Auth Screen" />
        </SafeAreaView>
    );
};
