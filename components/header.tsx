import { View, Image, StyleSheet, ImageSourcePropType } from "react-native"

export const Header = ({image} : {image: ImageSourcePropType}) => {
    return(
        <View>
            <Image style={styles.header} source={image}/>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 300,
        width: 'auto'
    }
})