import { ReactElement, createElement, useMemo, useState, useEffect } from "react";
import { ValueStatus } from "mendix";
import { GestureResponderEvent, View, Linking } from "react-native";
import { marked } from "marked";
import { mergeNativeStyles } from "@mendix/pluggable-widgets-tools";

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
    const output = useMemo(() => {
        const output = dataExpression.value || "";

        if (dataType.value?.toNumber() === 1) {
            return marked.parse(output, {});
        }

        return output;
    }, [dataExpression.value, dataType.value]);

    if (!loaded) {
        return <View />;
    }

    return <Renderer styles={styles} html={output} onPress={onLinkPress} />;
}
