import React, { Fragment } from 'react';
import { Text, View, Image, StyleSheet, ImageBackground } from 'react-native';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import iconoOk from "../../../assets/check.png";


const styles= StyleSheet.create({
    container:{
        //display:"flex",
        flex:4,
        //alignContent:"center",
        //justifyContent:"space-around",
        alignItems:"center",
    },
    div:{
        //flex:1,
       // backgroundColor: "rgba(0,0,0,0.25)",
        alignItems:"center",
        justifyContent:"center",
        margin:10,

    },
    imagen:{
        width:180,
        height:200,
        borderRadius:10,
        overflow:"hidden",
        resizeMode:"cover",
        //borderWidth:1,
        //borderColor:"rgba(0,0,0,1)",
        opacity:1,
        //alignItems:"flex-end"
    }
});



const ListaFiltros = ({filtros, Seleccionar }) => {
    renderItem = filtro =>  (
        <TouchableOpacity
        onPress={() => Seleccionar(filtro)}
        style={styles.div}>
            <ImageBackground  style={[styles.imagen,
                {opacity: filtro.selected ? 0.5 : 1},
                 ]}
            source={filtro.foto}>
            {(filtro.selected) ?<Image source={iconoOk} style={{margin:10}}/> : null }

            </ImageBackground>
            <Text>{filtro.text}</Text>
        </TouchableOpacity>
    );




    return(
    <FlatList
    contentContainerStyle={styles.container}
    //style={styles.container}
    data={filtros}
    keyExtractor={filtro => filtro.text}
    renderItem={({item}) => renderItem(item)}
    //horizontal="true"
    //columnWrapperStyle="true"
    numColumns="2"
    />
    );
};

export default ListaFiltros;
