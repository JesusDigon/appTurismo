import * as React from "react";
import {Text, View, StyleSheet, Image, Button, ScrollView} from "react-native";
import imagen_costa from "../../../assets/costa.jpg";
import imagen_interior from "../../../assets/interior.jpg";
import { TouchableOpacity } from "react-native-gesture-handler";
import ListaFiltros from "../../components/filtros"
import {filtros_costa} from "../../data/filtros";
import getStyles from "../../data/styles";
import { FontAwesome5 } from '@expo/vector-icons';

const styles = getStyles();


export default class Costa extends React.Component{

    constructor(props) {
      super(props)

      this.state = {
         filtros_costa:[],
         navigation: this.props.navigation,
         route: this.props.route,
         cia:"",
         costa:"",
         tipo:""

      };
    };


    //Función de selección
    Seleccionar =  filtro  => {
        const {filtros_costa} = this.state;
        filtros_costa.map((f) => f.selected=false);
        const newList = [...filtros_costa];
        const updateIndex = newList.findIndex(t => t.text === filtro.text )
        newList[updateIndex].selected = true;
        this.setState({filtros_costa: newList, costa: filtro.text});
    }


    SeleccionarCosta = filtro => { //Funcion que no hace nada, para cuando se haya saleecionado Sol
        return "";
    }


    componentDidMount = () => { //Función de carga del componente
        this.setState({
            filtros_costa:filtros_costa(),
            cia: this.state.route.params.cia,
            tipo: this.state.route.params.tipo });

            this.props.navigation.setOptions({
                headerRight: () => (
                <TouchableOpacity
                    style={styles.buton}
                        title="continuar"
                    onPress= { () => (this.state.costa==="")
                    ? alert("Debe seleccionar al menos una opción")
                    : this.props.navigation.navigate("Afluencia", {
                        cia: this.state.cia,
                        costa: this.state.costa,
                        tipo: this.state.tipo
                    })}>
                    <FontAwesome5 name="play" size={24} color="black" />
                            </TouchableOpacity>)
            });

            //Si esta seleccionado Sol como tipo de turismo, no se puede seleccionar Interior
            //y por defecto sale seleccionado Costa
        if (this.state.route.params.tipo === "Sol y playa"){
            const nuevoArray = filtros_costa();
            nuevoArray.map((f) => (f.text==="Costa")? f.selected=true : f.selected=false);
            this.setState({filtros_costa: nuevoArray, costa:"Costa"});
           }
        }

    render () {
        const {filtros_costa} = this.state;
        return (
            <ScrollView style={styles.content}>
                <View style={styles.div_text}>
                    <Text style={styles.text}>¿Te apetece mas costa o interior?</Text>
                </View>
                <ListaFiltros
                Seleccionar={(this.state.tipo==="Sol y playa")? this.SeleccionarCosta :this.Seleccionar}
                filtros={filtros_costa}
                />
            </ScrollView>

        )
    }
}