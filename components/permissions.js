import { PermissionsAndroid, Platform } from 'react-native';

export const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: 'Camera Permission',
                    message: 'Micra needs camera permission',
                }
            );
            if (granted === 'granted' || granted === 'never_ask_again') {
                return true;
            }
        } catch (err) {
            console.warn(err);
            return false;
        }
    } else return true;
};

export const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    title: 'External Storage Write Permission',
                    message: 'Micra needs write permission',
                }
            );
            // If WRITE_EXTERNAL_STORAGE Permission is granted
            if (granted === 'granted' || granted === 'never_ask_again')
                return true;
        } catch (err) {
            console.warn(err);
            alert('Write permission err', err);
        }
        return false;
    } else return true;
};
