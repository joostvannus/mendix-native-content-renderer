import { ReactElement, createElement, memo } from "react";
import { GestureResponderEvent, View } from "react-native";
import RenderHTML, { RenderersProps } from "react-native-render-html";
import { useLayout } from "@react-native-community/hooks/lib/useLayout";

import { CustomStyle } from "../ui/style";

type Target = "_blank" | "_self" | "_parent" | "_top";
interface Props {
    styles: CustomStyle;
    html: string;
    onPress: (
        event: GestureResponderEvent,
        href: string,
        htmlAttribs?: Record<string, string>,
        target?: Target
    ) => void;
}

const Renderer = memo(({ styles, html, onPress }: Props): ReactElement => {
    const { onLayout, ...layout } = useLayout();

    const rendererProps: Partial<RenderersProps> = {
        a: {
            onPress
        }
    };

    return (
        <View style={styles.container} onLayout={onLayout}>
            {html ? (
                <RenderHTML
                    contentWidth={layout.width}
                    baseStyle={styles.content}
                    tagsStyles={styles.tags}
                    renderersProps={rendererProps}
                    source={{ html }}
                />
            ) : (
                <View />
            )}
        </View>
    );
});

export { Renderer };
