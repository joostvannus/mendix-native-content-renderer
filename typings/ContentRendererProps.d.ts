/**
 * This file was generated from ContentRenderer.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue, EditableValue } from "mendix";
import { Big } from "big.js";

export type JsonViewerThemeEnum = "threezerotwofour" | "apathy" | "ashes" | "atelier_dune" | "atelier_forest" | "atelier_heath" | "atelier_lakeside" | "atelier_seaside" | "bespin" | "brewer" | "bright" | "chalk" | "codeschool" | "colors" | "default" | "eighties" | "embers" | "flat" | "google" | "grayscale" | "green_screen" | "harmonic16" | "hopscotch" | "isotope" | "marrakesh" | "mocha" | "monokai" | "ocean" | "paraiso" | "pop" | "railscasts" | "shapeshifter" | "solarized" | "summerfruit" | "tomorrow" | "london_tube" | "twilight";

export interface ContentRendererProps<Style> {
    name: string;
    style: Style[];
    dataExpression: DynamicValue<string>;
    dataType: DynamicValue<Big>;
    onClickAction?: ActionValue;
    onClickLinkAttribute?: EditableValue<string>;
    jsonViewerTheme: JsonViewerThemeEnum;
    jsonViewerInvertTheme: boolean;
}

export interface ContentRendererPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    dataExpression: string;
    dataType: string;
    onClickAction: {} | null;
    onClickLinkAttribute: string;
    jsonViewerTheme: JsonViewerThemeEnum;
    jsonViewerInvertTheme: boolean;
}
