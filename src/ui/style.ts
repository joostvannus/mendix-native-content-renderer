import { ViewStyle } from "react-native";
import { Style } from "@mendix/pluggable-widgets-tools";
import { MixedStyleDeclaration } from "react-native-render-html";

export interface CustomStyle extends Style {
    container: ViewStyle;
    content: MixedStyleDeclaration;
}

export const defaultContentRendererStyle: CustomStyle = {
    container: {
        flex: 1,
        height: "100%",
        minHeight: 300
    },
    content: {
        color: "#444"
    }
};
