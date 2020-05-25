
import * as React from "react";
import {Text, View, StyleSheet, Image, Button, ScrollView} from "react-native";
import imagen_pareja from "../../../assets/pareja.jpg";
import { TouchableOpacity } from "react-native-gesture-handler";
import ListaFiltros from "../../components/filtros";
import {filtros_afluencia} from "../../data/filtros";
import getStyles from "../../data/styles";
import { FontAwesome5 } from '@expo/vector-icons';

const styles = getStyles();


export default class Precio extends React.Component{
    constructor(props) {
      super(props)

      this.state = {
         filtros_afluencia:filtros_afluencia(),

         cia:"",
         costa:"",
         precio:"",
         afluencia:"",
         route: this.props.route
      };
    };

    SeleccionarAfluencia =  filtro  => {
        const {filtros_afluencia} = this.state;
        filtros_afluencia.map((f) => f.selected=false);
        const newList1 = [...filtros_afluencia];
        const updateIndex1 = newList1.findIndex(t => t.text === filtro.text )
        newList1[updateIndex1].selected = true;
        this.setState({filtros_afluencia: newList1, afluencia: filtro.text});

    };




    componentDidMount = () => {
        this.setState({
            cia: this.state.route.params.cia,
            costa: this.state.route.params.costa,
            tipo: this.state.route.params.tipo});

        this.props.navigation.setOptions({
            headerRight: () => (
            <TouchableOpacity
                style={styles.buton}
                    title="continuar"
                onPress= { () => (this.state.afluencia==="")
                ? alert("Debe seleccionar al menos una opción")
                : this.props.navigation.navigate("Precio",{
                    cia: this.state.cia,
                    costa: this.state.costa,
                    tipo: this.state.tipo,
                    afluencia: this.state.afluencia
                })}>
                <FontAwesome5 name="play" size={24} color="black" />
                        </TouchableOpacity>)
        });
    }

    render () {
        const {filtros_afluencia}= this.state;

        return (
            <ScrollView style={styles.content}>
                <View style={styles.div_text}>
                    <Text style={styles.text}>¿Que tipo de afluencia esperas encontrar en tu destino?</Text>
                </View>
                <ListaFiltros
                    Seleccionar={this.SeleccionarAfluencia}
                    filtros={filtros_afluencia}
                    />
                    <View style={styles.buton_div}>
                    <TouchableOpacity
                    style={styles.buton}
                        title="continuar"
                            onPress= { () => this.props.navigation.navigate("Precio",{
                            cia: this.state.cia,
                            costa: this.state.costa,
                            tipo: this.state.tipo,
                            afluencia: this.state.afluencia
                        })}>
                        <Text style={styles.text_buton}>CONTINUAR</Text>
                        </TouchableOpacity>
                </View>
            </ScrollView>

        )
    }
}



