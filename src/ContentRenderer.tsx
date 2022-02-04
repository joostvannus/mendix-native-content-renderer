import { ReactElement, createElement, useMemo, useState, useEffect } from "react";
import { ValueStatus } from "mendix";
import { GestureResponderEvent, View, Linking } from "react-native";
import { marked } from "marked";
import { mergeNativeStyles } from "@mendix/pluggable-widgets-tools";
import JSONTree from "react-native-json-tree";

import { ContentRendererProps } from "../typings/ContentRendererProps";
import { CustomStyle, defaultContentRendererStyle } from "./ui/style";
import { Renderer } from "./components/Renderer";

export function ContentRenderer({
    style,
    dataExpression,
    dataType,
    onClickAction,
    onClickLinkAttribute
}: ContentRendererProps<CustomStyle>): ReactElement {
    const styles = mergeNativeStyles(defaultContentRendererStyle, style);

    // We want to prevent excessive reloading of the Renderer component, so we keep an internal state
    const [loaded, setIsLoaded] = useState(false);
    useEffect(() => {
        if (dataExpression.status === ValueStatus.Available && dataType.status === ValueStatus.Available) {
            setIsLoaded(true);
        }
    }, [dataExpression.status, dataType.status]);

    // On pressing a link we communicate the href to a Mendix attribute (if defined). Next to that we decide
    // how to handle it. If action is defined, run the action, otherwise let the system handle it.
    const onLinkPress = (_event: GestureResponderEvent, href: string): void => {
        if (href && onClickLinkAttribute) {
            onClickLinkAttribute.setTextValue(href);
        }
        if (onClickAction && onClickAction.canExecute && !onClickAction.isExecuting) {
            onClickAction.execute();
        } else {
            Linking.openURL(href);
        }
    };

    // This might change, probably better to keep an internal state
    const output: string | object = useMemo(() => {
        const output = dataExpression.value || "";

        if (dataType.value?.toNumber() === 1) {
            // Type 1 = Markdown
            return marked.parse(output, {});
        } else if (dataType.value?.toNumber() === 2) {
            // Type 2 = JSON
            // TODO: BETTER ERROR HANDLING!
            try {
                const json = JSON.parse(output);
                return json;
            } catch (error) {
                console.error(error);
                return { error: "<< Error parsing JSON, please check your data >>" };
            }
        }

        return output;
    }, [dataExpression.value, dataType.value]);

    if (!loaded) {
        return <View />;
    }

    if (typeof output !== "string") {
        return (
            <View style={styles.container}>
                <JSONTree data={output as any} theme={styles.json.theme} />
            </View>
        );
    }

    return <Renderer styles={styles} html={output} onPress={onLinkPress} />;
}
