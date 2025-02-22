import React, { Component } from "react";
import {Button} from "react-native-elements"
import LinearGradient from "react-native-linear-gradient";
import { ThemeColor as color } from '../colors'

const GButton = ({onPress,Text,loading}) => {
    return (
        <Button
            onPress={onPress}
            ViewComponent={LinearGradient} // Don't forget this!
            titleStyle={{fontFamily:'Montserrat-SemiBold',color:'white'  }}
            buttonStyle={{ borderRadius: 30, }}
            containerStyle={{marginTop:20}}
            rounded={true}
            linearGradientProps={{
              // colors:[color.PDark,color.Primary],
              colors:color.BtnG,
              start: { x: 1, y: 2 },
              end: { x: 0.1, y: 0.2 }
            }}
            title={Text}
            loading={loading}
          />
    )
}
export default GButton