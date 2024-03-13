import { StyleSheet, Text, View, TouchableOpacity, StatusBar, ScrollView, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import Icon4 from 'react-native-vector-icons/dist/Feather';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart } from '../redux/CartSlice';
import { useState } from 'react';
import { copyWithStructuralSharing } from '@reduxjs/toolkit/query';

const Cart = ({ navigation }) => {

    const cartProducts = useSelector(state => state.cart);
    console.log(cartProducts);

    // console.log("cart products", cartProducts);

    const dispatch = useDispatch();

    return (
        <View>
            <StatusBar
                animated={true}
                backgroundColor="#f6f6f6"
                barStyle="dark-content"
            />

            {/* header */}
            <View style={{ paddingVertical: 6, flexDirection: "row", alignItems: "center", paddingHorizontal: 15, backgroundColor: '#f6f6f6' }}>
                <TouchableOpacity style={{ backgroundColor: "#fff", padding: 5, borderRadius: 100, alignItems: "center", justifyContent: "center" }} onPress={() => navigation.goBack()}>
                    <Icon name="keyboard-arrow-left" size={20} color="#000" />
                </TouchableOpacity>
                <Text style={{ color: "#000", fontWeight: "600", fontSize: 17, marginLeft: 10 }}>Shopping Bag</Text>
            </View>

            <Text style={{ color: "#000", textAlign: "center" }}>{cartProducts.length}</Text>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#fff", }}>
                <FlatList
                    data={cartProducts}
                    renderItem={({ item }) => {
                        console.log(item);
                        return (
                            <View style={{ flexDirection: "column", alignItems: "center", padding: 5, borderRadius: 8, backgroundColor: "#fff", marginVertical: 5, marginHorizontal: 5, elevation: 2 }}>


                                <View style={{ flexDirection: "row" }}>
                                    <View style={{ flexDirection: "row", flex: 1.3, backgroundColor: "#f6f6f6", borderRadius: 8, }}>
                                        <Image source={require("../assets/shirt.png")} style={{ resizeMode: "contain", height: 130, width: "100%" }} />
                                    </View>
                                    <View style={{ flex: 2, flexDirection: "column", justifyContent: "flex-start", height: "100%", marginLeft: 10 }}>
                                        <Text style={{ color: "#000", fontWeight: "700", fontSize: 18, width: "100%" }}>{item.title}</Text>
                                        <View style={{ flexDirection: "row", alignItems: "center", padding: 0 }}>
                                            <Text style={{ color: "#948497", fontSize: 13, fontWeight: "500" }}>By</Text>
                                            <Image source={require("../assets/nike_logo.png")} style={{ resizeMode: "contain", height: 28, width: 28, marginLeft: 3 }} />
                                            <Text style={{ color: "#000", fontWeight: "600", fontSize: 13, }}>Nike Official</Text>
                                            <View style={{ backgroundColor: "#3f87e7", borderRadius: 100, padding: 2, marginLeft: 5 }}>
                                                <Icon4
                                                    name="check"
                                                    style={{
                                                        color: '#fff',
                                                        fontSize: 9,
                                                        fontWeight: "600"
                                                    }}
                                                />
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}>
                                            <TouchableOpacity style={{ backgroundColor: "#e27e45", paddingVertical: 1, borderRadius: 8, paddingHorizontal: 8, flexDirection: "row", alignItems: "center", justifyContent: "center" }}><Text style={{ fontSize: "600", fontSize: 20, color: "#fff" }}>+</Text></TouchableOpacity>
                                            <Text style={{ color: "#000", marginLeft: 6, fontWeight: "600", fontSize: 16 }}>3</Text>
                                            <TouchableOpacity style={{ backgroundColor: "#e27e45", borderRadius: 8, paddingHorizontal: 10, flexDirection: "row", alignItems: "center", justifyContent: "center", marginLeft: 6 }}><Text style={{ fontSize: "600", fontSize: 22, color: "#fff" }}>-</Text></TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ width: "100%" }}>
                                    <TouchableOpacity style={{ backgroundColor: "#b04632", paddingVertical: 9, marginTop: 8, borderRadius: 8, paddingHorizontal: 9, }} onPress={() => dispatch(removeItemFromCart(item.id))}>
                                        <Text style={{ color: "#fff", textAlign: "center", fontWeight: "600", fontSize: 17 }}>Delete item from cart</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    }}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </View>
    )
}

export default Cart;

const styles = StyleSheet.create({})

// < ScrollView >
// <View style={{ paddingHorizontal: 5, backgroundColor: "#f6f6f6" }}>

//     {/* heading */}
//     <View style={{ backgroundColor: "#fff", paddingVertical: 5, flexDirection: "row", alignItems: "center", paddingHorizontal: 5 }}>
//         <Text style={{ color: '#000', fontWeight: "600", fontSize: 15 }}>Shopping Bag</Text>
//         <Text style={{ color: '#000', fontWeight: "600", fontSize: 15, marginLeft: 3 }}>(2 items)</Text>
//     </View>

//     {/* Product card */}
//     <View style={{ flexDirection: "column", alignItems: "center", padding: 5, borderRadius: 8, backgroundColor: "#fff", marginVertical: 5, marginHorizontal: 5, elevation: 2 }}>

//         <View style={{ flexDirection: "row" }}>
//             <View style={{ flexDirection: "row", flex: 1.3, backgroundColor: "#f6f6f6", borderRadius: 8, }}>
//                 <Image source={require("../assets/shirt.png")} style={{ resizeMode: "contain", height: 130, width: "100%" }} />
//             </View>
//             <View style={{ flex: 2, flexDirection: "column", justifyContent: "flex-start", height: "100%", marginLeft: 10 }}>
//                 <Text style={{ color: "#000", fontWeight: "700", fontSize: 18, width: "100%" }}>Air Jordan 1 Low Fragment X Travis Scoot</Text>
//                 <View style={{ flexDirection: "row", alignItems: "center", padding: 0 }}>
//                     <Text style={{ color: "#948497", fontSize: 13, fontWeight: "500" }}>By</Text>
//                     <Image source={require("../assets/nike_logo.png")} style={{ resizeMode: "contain", height: 28, width: 28, color: "#000", marginLeft: 3 }} />
//                     <Text style={{ color: "#000", fontWeight: "600", fontSize: 13, }}>Nike Official</Text>
//                     <View style={{ backgroundColor: "#3f87e7", borderRadius: 100, padding: 2, marginLeft: 5 }}>
//                         <Icon4
//                             name="check"
//                             style={{
//                                 color: '#fff',
//                                 fontSize: 9,
//                                 fontWeight: "600"
//                             }}
//                         />
//                     </View>
//                 </View>
//                 <View style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}>
//                     <TouchableOpacity style={{ backgroundColor: "#e27e45", paddingVertical: 1, borderRadius: 8, paddingHorizontal: 8, flexDirection: "row", alignItems: "center", justifyContent: "center" }}><Text style={{ fontSize: "600", fontSize: 20, color: "#fff" }}>+</Text></TouchableOpacity>
//                     <Text style={{ color: "#000", marginLeft: 6, fontWeight: "600", fontSize: 16 }}>3</Text>
//                     <TouchableOpacity style={{ backgroundColor: "#e27e45", borderRadius: 8, paddingHorizontal: 10, flexDirection: "row", alignItems: "center", justifyContent: "center", marginLeft: 6 }}><Text style={{ fontSize: "600", fontSize: 22, color: "#fff" }}>-</Text></TouchableOpacity>
//                 </View>
//             </View>
//         </View>
//         <View style={{ width: "100%" }}>
//             <TouchableOpacity style={{ backgroundColor: "#b04632", paddingVertical: 9, marginTop: 8, borderRadius: 8, paddingHorizontal: 9, }}>
//                 <Text style={{ color: "#fff", textAlign: "center", fontWeight: "600", fontSize: 17 }}>Delete item from cart</Text>
//             </TouchableOpacity>
//         </View>
//     </View>

//     {/* Product card */}
//     <View style={{ flexDirection: "column", alignItems: "center", padding: 5, borderRadius: 8, backgroundColor: "#fff", marginVertical: 5, marginHorizontal: 5, elevation: 2 }}>

//         <View style={{ flexDirection: "row" }}>
//             <View style={{ flexDirection: "row", flex: 1.3, backgroundColor: "#f6f6f6", borderRadius: 8, }}>
//                 <Image source={require("../assets/shirt.png")} style={{ resizeMode: "contain", height: 130, width: "100%" }} />
//             </View>
//             <View style={{ flex: 2, flexDirection: "column", justifyContent: "flex-start", height: "100%", marginLeft: 10 }}>
//                 <Text style={{ color: "#000", fontWeight: "700", fontSize: 18, width: "100%" }}>Air Jordan 1 Low Fragment X Travis Scoot</Text>
//                 <View style={{ flexDirection: "row", alignItems: "center", padding: 0 }}>
//                     <Text style={{ color: "#948497", fontSize: 13, fontWeight: "500" }}>By</Text>
//                     <Image source={require("../assets/nike_logo.png")} style={{ resizeMode: "contain", height: 28, width: 28, color: "#000", marginLeft: 3 }} />
//                     <Text style={{ color: "#000", fontWeight: "600", fontSize: 13, }}>Nike Official</Text>
//                     <View style={{ backgroundColor: "#3f87e7", borderRadius: 100, padding: 2, marginLeft: 5 }}>
//                         <Icon4
//                             name="check"
//                             style={{
//                                 color: '#fff',
//                                 fontSize: 9,
//                                 fontWeight: "600"
//                             }}
//                         />
//                     </View>
//                 </View>
//                 <View style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}>
//                     <TouchableOpacity style={{ backgroundColor: "#e27e45", paddingVertical: 1, borderRadius: 8, paddingHorizontal: 8, flexDirection: "row", alignItems: "center", justifyContent: "center" }}><Text style={{ fontSize: "600", fontSize: 20, color: "#fff" }}>+</Text></TouchableOpacity>
//                     <Text style={{ color: "#000", marginLeft: 6, fontWeight: "600", fontSize: 16 }}>3</Text>
//                     <TouchableOpacity style={{ backgroundColor: "#e27e45", borderRadius: 8, paddingHorizontal: 10, flexDirection: "row", alignItems: "center", justifyContent: "center", marginLeft: 6 }}><Text style={{ fontSize: "600", fontSize: 22, color: "#fff" }}>-</Text></TouchableOpacity>
//                 </View>
//             </View>
//         </View>
//         <View style={{ width: "100%" }}>
//             <TouchableOpacity style={{ backgroundColor: "#b04632", paddingVertical: 9, marginTop: 8, borderRadius: 8, paddingHorizontal: 9, }}>
//                 <Text style={{ color: "#fff", textAlign: "center", fontWeight: "600", fontSize: 17 }}>Delete item from cart</Text>
//             </TouchableOpacity>
//         </View>
//     </View>

//     {/* Product card */}
//     <View style={{ flexDirection: "column", alignItems: "center", padding: 5, borderRadius: 8, backgroundColor: "#fff", marginVertical: 5, marginHorizontal: 5, elevation: 2 }}>

//         <View style={{ flexDirection: "row" }}>
//             <View style={{ flexDirection: "row", flex: 1.3, backgroundColor: "#f6f6f6", borderRadius: 8, }}>
//                 <Image source={require("../assets/shirt.png")} style={{ resizeMode: "contain", height: 130, width: "100%" }} />
//             </View>
//             <View style={{ flex: 2, flexDirection: "column", justifyContent: "flex-start", height: "100%", marginLeft: 10 }}>
//                 <Text style={{ color: "#000", fontWeight: "700", fontSize: 18, width: "100%" }}>Air Jordan 1 Low Fragment X Travis Scoot</Text>
//                 <View style={{ flexDirection: "row", alignItems: "center", padding: 0 }}>
//                     <Text style={{ color: "#948497", fontSize: 13, fontWeight: "500" }}>By</Text>
//                     <Image source={require("../assets/nike_logo.png")} style={{ resizeMode: "contain", height: 28, width: 28, color: "#000", marginLeft: 3 }} />
//                     <Text style={{ color: "#000", fontWeight: "600", fontSize: 13, }}>Nike Official</Text>
//                     <View style={{ backgroundColor: "#3f87e7", borderRadius: 100, padding: 2, marginLeft: 5 }}>
//                         <Icon4
//                             name="check"
//                             style={{
//                                 color: '#fff',
//                                 fontSize: 9,
//                                 fontWeight: "600"
//                             }}
//                         />
//                     </View>
//                 </View>
//                 <View style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}>
//                     <TouchableOpacity style={{ backgroundColor: "#e27e45", paddingVertical: 1, borderRadius: 8, paddingHorizontal: 8, flexDirection: "row", alignItems: "center", justifyContent: "center" }}><Text style={{ fontSize: "600", fontSize: 20, color: "#fff" }}>+</Text></TouchableOpacity>
//                     <Text style={{ color: "#000", marginLeft: 6, fontWeight: "600", fontSize: 16 }}>3</Text>
//                     <TouchableOpacity style={{ backgroundColor: "#e27e45", borderRadius: 8, paddingHorizontal: 10, flexDirection: "row", alignItems: "center", justifyContent: "center", marginLeft: 6 }}><Text style={{ fontSize: "600", fontSize: 22, color: "#fff" }}>-</Text></TouchableOpacity>
//                 </View>
//             </View>
//         </View>
//         <View style={{ width: "100%" }}>
//             <TouchableOpacity style={{ backgroundColor: "#b04632", paddingVertical: 9, marginTop: 8, borderRadius: 8, paddingHorizontal: 9, }}>
//                 <Text style={{ color: "#fff", textAlign: "center", fontWeight: "600", fontSize: 17 }}>Delete item from cart</Text>
//             </TouchableOpacity>
//         </View>
//     </View>

//     {/* Product card */}
//     <View style={{ flexDirection: "column", alignItems: "center", padding: 5, borderRadius: 8, backgroundColor: "#fff", marginVertical: 5, marginHorizontal: 5, elevation: 2 }}>

//         <View style={{ flexDirection: "row" }}>
//             <View style={{ flexDirection: "row", flex: 1.3, backgroundColor: "#f6f6f6", borderRadius: 8, }}>
//                 <Image source={require("../assets/shirt.png")} style={{ resizeMode: "contain", height: 130, width: "100%" }} />
//             </View>
//             <View style={{ flex: 2, flexDirection: "column", justifyContent: "flex-start", height: "100%", marginLeft: 10 }}>
//                 <Text style={{ color: "#000", fontWeight: "700", fontSize: 18, width: "100%" }}>Air Jordan 1 Low Fragment X Travis Scoot</Text>
//                 <View style={{ flexDirection: "row", alignItems: "center", padding: 0 }}>
//                     <Text style={{ color: "#948497", fontSize: 13, fontWeight: "500" }}>By</Text>
//                     <Image source={require("../assets/nike_logo.png")} style={{ resizeMode: "contain", height: 28, width: 28, color: "#000", marginLeft: 3 }} />
//                     <Text style={{ color: "#000", fontWeight: "600", fontSize: 13, }}>Nike Official</Text>
//                     <View style={{ backgroundColor: "#3f87e7", borderRadius: 100, padding: 2, marginLeft: 5 }}>
//                         <Icon4
//                             name="check"
//                             style={{
//                                 color: '#fff',
//                                 fontSize: 9,
//                                 fontWeight: "600"
//                             }}
//                         />
//                     </View>
//                 </View>
//                 <View style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}>
//                     <TouchableOpacity style={{ backgroundColor: "#e27e45", paddingVertical: 1, borderRadius: 8, paddingHorizontal: 8, flexDirection: "row", alignItems: "center", justifyContent: "center" }}><Text style={{ fontSize: "600", fontSize: 20, color: "#fff" }}>+</Text></TouchableOpacity>
//                     <Text style={{ color: "#000", marginLeft: 6, fontWeight: "600", fontSize: 16 }}>3</Text>
//                     <TouchableOpacity style={{ backgroundColor: "#e27e45", borderRadius: 8, paddingHorizontal: 10, flexDirection: "row", alignItems: "center", justifyContent: "center", marginLeft: 6 }}><Text style={{ fontSize: "600", fontSize: 22, color: "#fff" }}>-</Text></TouchableOpacity>
//                 </View>
//             </View>
//         </View>
//         <View style={{ width: "100%" }}>
//             <TouchableOpacity style={{ backgroundColor: "#b04632", paddingVertical: 9, marginTop: 8, borderRadius: 8, paddingHorizontal: 9, }}>
//                 <Text style={{ color: "#fff", textAlign: "center", fontWeight: "600", fontSize: 17 }}>Delete item from cart</Text>
//             </TouchableOpacity>
//         </View>
//     </View>

//     {/* Product card */}
//     <View style={{ flexDirection: "column", alignItems: "center", padding: 5, borderRadius: 8, backgroundColor: "#fff", marginVertical: 5, marginHorizontal: 5, elevation: 2 }}>

//         <View style={{ flexDirection: "row" }}>
//             <View style={{ flexDirection: "row", flex: 1.3, backgroundColor: "#f6f6f6", borderRadius: 8, }}>
//                 <Image source={require("../assets/shirt.png")} style={{ resizeMode: "contain", height: 130, width: "100%" }} />
//             </View>
//             <View style={{ flex: 2, flexDirection: "column", justifyContent: "flex-start", height: "100%", marginLeft: 10 }}>
//                 <Text style={{ color: "#000", fontWeight: "700", fontSize: 18, width: "100%" }}>Air Jordan 1 Low Fragment X Travis Scoot</Text>
//                 <View style={{ flexDirection: "row", alignItems: "center", padding: 0 }}>
//                     <Text style={{ color: "#948497", fontSize: 13, fontWeight: "500" }}>By</Text>
//                     <Image source={require("../assets/nike_logo.png")} style={{ resizeMode: "contain", height: 28, width: 28, color: "#000", marginLeft: 3 }} />
//                     <Text style={{ color: "#000", fontWeight: "600", fontSize: 13, }}>Nike Official</Text>
//                     <View style={{ backgroundColor: "#3f87e7", borderRadius: 100, padding: 2, marginLeft: 5 }}>
//                         <Icon4
//                             name="check"
//                             style={{
//                                 color: '#fff',
//                                 fontSize: 9,
//                                 fontWeight: "600"
//                             }}
//                         />
//                     </View>
//                 </View>
//                 <View style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}>
//                     <TouchableOpacity style={{ backgroundColor: "#e27e45", paddingVertical: 1, borderRadius: 8, paddingHorizontal: 8, flexDirection: "row", alignItems: "center", justifyContent: "center" }}><Text style={{ fontSize: "600", fontSize: 20, color: "#fff" }}>+</Text></TouchableOpacity>
//                     <Text style={{ color: "#000", marginLeft: 6, fontWeight: "600", fontSize: 16 }}>3</Text>
//                     <TouchableOpacity style={{ backgroundColor: "#e27e45", borderRadius: 8, paddingHorizontal: 10, flexDirection: "row", alignItems: "center", justifyContent: "center", marginLeft: 6 }}><Text style={{ fontSize: "600", fontSize: 22, color: "#fff" }}>-</Text></TouchableOpacity>
//                 </View>
//             </View>
//         </View>
//         <View style={{ width: "100%" }}>
//             <TouchableOpacity style={{ backgroundColor: "#b04632", paddingVertical: 9, marginTop: 8, borderRadius: 8, paddingHorizontal: 9, }}>
//                 <Text style={{ color: "#fff", textAlign: "center", fontWeight: "600", fontSize: 17 }}>Delete item from cart</Text>
//             </TouchableOpacity>
//         </View>
//     </View>

// </View>
//         </ >