import * as React from "react";
import {Text, View, StyleSheet, Image, Button, ListView} from "react-native";
import ListaFiltros from "../../components/filtros";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import {filtros_tipo} from "../../data/filtros";
import getStyles from "../../data/styles";
import { FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
const styles = getStyles();

export default class Tipo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            filtros_tipo: [],
            isTrue: true,
            value: null,
            tipo: ""}
       }

    componentDidMount(){
        this.setState({filtros_tipo: filtros_tipo()});
        this.props.navigation.setOptions({
            headerRight: () => (  <TouchableOpacity
                style={styles.buton}
                    title="continuar"
                    onPress= { () => (this.state.tipo==="")? alert("Debe seleccionar al menos una opción") : this.props.navigation.navigate("cia", {tipo:this.state.tipo})}>
                    <FontAwesome5 name="play" size={24} color="black" />
                    </TouchableOpacity>),
          })
    }

    Seleccionar =  filtro  => {
        const {filtros_tipo} = this.state;
        filtros_tipo.map((f) => f.selected=false);
        const newList = [...filtros_tipo];
        const updateIndex = newList.findIndex(t => t.text === filtro.text )
        newList[updateIndex].selected = true;
        this.setState({filtros_tipo: newList, tipo: filtro.text });

    }

    render () {
        return (
            <ScrollView style={styles.content}>
                <View style={styles.div_text}>
                    <Text style={styles.text}>¿Cuál es la experiencia principal que buscas realizar en tu destino? prueba</Text>
                </View>
                <ListaFiltros
                filtros={this.state.filtros_tipo}
                Seleccionar={this.Seleccionar} />
            </ScrollView>
        )
    }
}