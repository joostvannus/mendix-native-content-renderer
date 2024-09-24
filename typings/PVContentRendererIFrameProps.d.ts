/**
 * This file was generated from PVContentRendererIFrame.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue, EditableValue } from "mendix";
import { Big } from "big.js";

export interface PVContentRendererIFrameProps<Style> {
    name: string;
    style: Style[];
    dataExpression: DynamicValue<string>;
    dataType: DynamicValue<Big>;
    onClickAction?: ActionValue;
    onClickLinkAttribute?: EditableValue<string>;
}

export interface PVContentRendererIFramePreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    dataExpression: string;
    dataType: string;
    onClickAction: {} | null;
    onClickLinkAttribute: string;
}
