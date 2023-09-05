import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, SafeAreaView, Text } from 'react-native';
import { RootStackParamList } from '../../navigation';

export const AuthScreen = () => {
    const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <SafeAreaView>
            <Text>Auth Screen</Text>
            <Button onPress={() => navigate('ArticlesScreen')} title="Articles Screen" />
        </SafeAreaView>
    );
};
