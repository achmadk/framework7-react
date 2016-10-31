﻿import * as React from 'react';

import {ColorsEnum, getColorCls} from '../../utils/Colors';

export enum ButtonTypeEnum {
    Standard,
    Filled
}

export enum ButtonSizeEnum {
    Normal,
    Big
}

export interface IButtonProps {
    text: string;
    onClick: () => void;
    additionalClassNames?: string;
    type?: ButtonTypeEnum;
    size?: ButtonSizeEnum;
    round?: boolean;
    color?: ColorsEnum;
}

const getButtonSizeCls = (props: IButtonProps) => {
    return props.size === ButtonSizeEnum.Big ? 'button-big' : '';
};

const getButtonTypeCls = (props: IButtonProps) => {
    return props.type === ButtonTypeEnum.Filled ? 'button-fill' : '';
};

const getButtonRoundnessCls = (props: IButtonProps) => {
    return props.round ? 'button-round' : '';
};

export const Button = (props: IButtonProps) => {
    return <a className={`button ${getButtonTypeCls(props)} ${getButtonSizeCls(props)} ${getButtonRoundnessCls(props)} ${getColorCls(props.color)} ${props.additionalClassNames || ''}`} onClick={props.onClick}>{props.text}</a>;    
};