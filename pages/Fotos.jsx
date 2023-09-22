import { Camera, CameraType } from "expo-camera"
import { useState, useEffect } from "react"
import { View, Text, Pressable, Image } from "react-native"
import { getStorage } from "firebase/storage";
import app from "../fireBaseConfig";

export default function Fotos() {
    const [temPermissao, setTemPermissao] = useState(null)
    const [camera, setCamera] = useState(null)
    const [uri, setUri] = useState(null)

    useEffect(async () => {
        const { status } = await Camera.requestCameraPermissionsAsync()
        setTemPermissao(status === "granted")
    }, [])

    if(temPermissao === null) {
        return (<Text>Verificando permissão da câmera</Text>)
    }

    if (temPermissao === false) {
        return (<Text>Verificando permissão da câmera foi negada!</Text>)
    }

    const tirarFoto = async() => {
        if (camera) {
            const { uri } = await camera.takePictureAsync
            setUri(uri)

            const foto = await fetch(uri);
            const fotoBlob = await foto.blob();
            const storage = getStorage(app)
            const storageRef = ref(storage, "fototeste.jpg");
            console.log("lero")
        }
    }

    return (
        <View>
            {
                uri !== null ? 
                <Image style={{width: 1000, height: 1000}} source={{uri}} /> :
                <>
                    <Camera type={CameraType.back} ref={ref => setCamera(ref)} style={{width: "1000%"}} />
                    <Pressable onPress={tirarFoto}> 
                        <Text>Tirar Foto</Text>
                    </Pressable>
                </>
            }
        </View>
    )
}