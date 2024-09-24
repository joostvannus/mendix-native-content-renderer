import IframeRenderer, { iframeModel } from '@native-html/iframe-plugin';
import { ReactElement, createElement, memo } from "react";
import { GestureResponderEvent, View } from "react-native";
import RenderHTML, { RenderersProps } from "react-native-render-html";
import { useLayout } from "@react-native-community/hooks/lib/useLayout";
import WebView from 'react-native-webview';

import { CustomStyle } from "../ui/style";

const renderers = {
    iframe: IframeRenderer
};

const customHTMLElementModels = {
    iframe: iframeModel
};

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
        },
        iframe: {
            scalesPageToFit: true,
            webViewProps: {
                /* Any prop you want to pass to iframe WebViews */
            }
        }
    };

    return (
        <View style={styles.html.container} onLayout={onLayout}>
            {html ? (
                <RenderHTML
                    contentWidth={layout.width}
                    customHTMLElementModels={customHTMLElementModels}
                    baseStyle={styles.html.base}
                    tagsStyles={styles.html.tags}
                    idsStyles={styles.html.ids}
                    classesStyles={styles.html.classes}
                    renderers={renderers}
                    renderersProps={rendererProps}
                    source={{ html }}
                    WebView={WebView}
                />
            ) : (
                <View />
            )}
        </View>
    );
});

export { Renderer };
