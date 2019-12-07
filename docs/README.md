[vault-maker](README.md)

# vault-maker

## Index

### Variables

* [maker](README.md#let-maker)
* [web3](README.md#let-web3)

### Functions

* [approveProxyInDai](README.md#const-approveproxyindai)
* [approveProxyInREP](README.md#const-approveproxyinrep)
* [getWeb3](README.md#const-getweb3)
* [setup](README.md#const-setup)

### Object literals

* [base](README.md#const-base)
* [buttons](README.md#const-buttons)
* [colors](README.md#const-colors)
* [text](README.md#const-text)
* [theme](README.md#const-theme)
* [variants](README.md#let-variants)

## Variables

### `Let` maker

• **maker**: *any* =  null

*Defined in [utils/web3.js:5](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/utils/web3.js#L5)*

___

### `Let` web3

• **web3**: *any* =  null

*Defined in [utils/web3.js:6](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/utils/web3.js#L6)*

## Functions

### `Const` approveProxyInDai

▸ **approveProxyInDai**(): *Promise‹any›*

*Defined in [utils/web3.js:91](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/utils/web3.js#L91)*

**Returns:** *Promise‹any›*

___

### `Const` approveProxyInREP

▸ **approveProxyInREP**(): *Promise‹any›*

*Defined in [utils/web3.js:65](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/utils/web3.js#L65)*

**Returns:** *Promise‹any›*

___

### `Const` getWeb3

▸ **getWeb3**(): *Promise‹any›*

*Defined in [utils/web3.js:42](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/utils/web3.js#L42)*

**Returns:** *Promise‹any›*

___

### `Const` setup

▸ **setup**(`network`: any, `provider`: any, `infuraOptions`: any): *Promise‹any›*

*Defined in [utils/web3.js:8](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/utils/web3.js#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`network` | any |
`provider` | any |
`infuraOptions` | any |

**Returns:** *Promise‹any›*

## Object literals

### `Const` base

### ▪ **base**: *object*

*Defined in [styles/text-variants.js:1](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/styles/text-variants.js#L1)*

###  -moz-osx-font-smoothing

• **-moz-osx-font-smoothing**: *string* = "grayscale"

*Defined in [styles/text-variants.js:2](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/styles/text-variants.js#L2)*

###  -webkit-font-smoothing

• **-webkit-font-smoothing**: *string* = "antialiased"

*Defined in [styles/text-variants.js:3](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/styles/text-variants.js#L3)*

___

### `Const` buttons

### ▪ **buttons**: *object*

*Defined in [styles/button-variants.js:1](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/styles/button-variants.js#L1)*

▪ **outline**: *object*

*Defined in [styles/button-variants.js:2](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/styles/button-variants.js#L2)*

* **bg**: *string* = "transparent"

* **borderColor**: *string* = "primary"

* **color**: *string* = "primary"

* **&:hover**: *object*

  * **backgroundColor**: *string* = "rgba(26, 171, 155, 0.1)"

  * **transform**: *string* = "translateY(-1px)"

▪ **primary**: *object*

*Defined in [styles/button-variants.js:11](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/styles/button-variants.js#L11)*

* **bg**: *string* = "primary"

* **borderColor**: *string* = "primary"

* **color**: *string* = "white"

* **&:hover**: *object*

  * **bg**: *string* = "darkPrimary"

  * **borderColor**: *string* = "darkPrimary"

  * **transform**: *string* = "translateY(-1px)"

▪ **secondary**: *object*

*Defined in [styles/button-variants.js:21](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/styles/button-variants.js#L21)*

* **bg**: *string* = "secondary"

* **borderColor**: *string* = "secondary"

* **color**: *string* = "white"

* **&:hover**: *object*

  * **backgroundColor**: *string* = "darkSecondary"

  * **transform**: *string* = "translateY(-1px)"

▪ **text**: *object*

*Defined in [styles/button-variants.js:30](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/styles/button-variants.js#L30)*

* **bg**: *string* = "transparent"

* **borderColor**: *string* = "transparent"

* **color**: *string* = "primary"

* **transform**: *string* = "translateY(0px)"

* **&:hover**: *object*

  * **backgroundColor**: *string* = "transparent"

  * **color**: *string* = "darkPrimary"

  * **transform**: *string* = "translateY(0px)"

___

### `Const` colors

### ▪ **colors**: *object*

*Defined in [styles/colors.js:1](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/styles/colors.js#L1)*

###  bat

• **bat**: *string* = "rgb(234, 86, 19)"

*Defined in [styles/colors.js:2](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/styles/colors.js#L2)*

###  dark

• **dark**: *string* = "#222222"

*Defined in [styles/colors.js:3](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/styles/colors.js#L3)*

###  darkPrimary

• **darkPrimary**: *string* = "#0d8577"

*Defined in [styles/colors.js:4](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/styles/colors.js#L4)*

###  eth

• **eth**: *string* = "rgb(201, 157, 102)"

*Defined in [styles/colors.js:5](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/styles/colors.js#L5)*

###  grey

• **grey**: *string* = "rgb(55, 74, 97)"

*Defined in [styles/colors.js:6](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/styles/colors.js#L6)*

###  lightGrey

• **lightGrey**: *string* = "#e4e4e4"

*Defined in [styles/colors.js:7](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/styles/colors.js#L7)*

###  lightMidGrey

• **lightMidGrey**: *string* = "#a3a3a3"

*Defined in [styles/colors.js:8](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/styles/colors.js#L8)*

###  lightPrimary

• **lightPrimary**: *string* = "rgb(89, 188, 175)"

*Defined in [styles/colors.js:9](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/styles/colors.js#L9)*

###  lightSecondary

• **lightSecondary**: *string* = "rgb(255, 225, 160)"

*Defined in [styles/colors.js:10](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/styles/colors.js#L10)*

###  lightWarning

• **lightWarning**: *string* = "rgb(255, 169, 164)"

*Defined in [styles/colors.js:11](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/styles/colors.js#L11)*

###  midGrey

• **midGrey**: *string* = "rgb(76, 93, 113)"

*Defined in [styles/colors.js:12](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/styles/colors.js#L12)*

###  primary

• **primary**: *string* = "#1AAB9B"

*Defined in [styles/colors.js:13](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/styles/colors.js#L13)*

###  rep

• **rep**: *string* = "rgb(65, 36, 103)"

*Defined in [styles/colors.js:14](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/styles/colors.js#L14)*

###  secondary

• **secondary**: *string* = "#F4B731"

*Defined in [styles/colors.js:15](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/styles/colors.js#L15)*

###  superLightGrey

• **superLightGrey**: *string* = "#f5f5f5"

*Defined in [styles/colors.js:16](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/styles/colors.js#L16)*

###  superLightPrimary

• **superLightPrimary**: *string* = "rgb(216, 238, 235)"

*Defined in [styles/colors.js:17](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/styles/colors.js#L17)*

###  superLightSecondary

• **superLightSecondary**: *string* = "rgb(255, 246, 228)"

*Defined in [styles/colors.js:18](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/styles/colors.js#L18)*

###  superLightWarning

• **superLightWarning**: *string* = "rgb(255, 233, 232)"

*Defined in [styles/colors.js:19](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/styles/colors.js#L19)*

###  transparent

• **transparent**: *string* = "transparent"

*Defined in [styles/colors.js:20](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/styles/colors.js#L20)*

###  warning

• **warning**: *string* = "rgb(255,0,0)"

*Defined in [styles/colors.js:21](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/styles/colors.js#L21)*

___

### `Const` text

### ▪ **text**: *object*

*Defined in [styles/text-variants.js:6](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/styles/text-variants.js#L6)*

▪ **body**: *object*

*Defined in [styles/text-variants.js:7](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/styles/text-variants.js#L7)*

* **large**: *object*

  * **color**: *string* = "white"

  * **fontFamily**: *string* = "body"

  * **fontSize**: *number* = 3

* **regular**: *object*

  * **color**: *string* = "white"

  * **fontFamily**: *string* = "body"

  * **fontSize**: *number* = 2

* **small**: *object*

  * **color**: *string* = "white"

  * **fontFamily**: *string* = "body"

  * **fontSize**: *number* = 0

▪ **heading**: *object*

*Defined in [styles/text-variants.js:24](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/styles/text-variants.js#L24)*

* **extra**: *object*

  * **color**: *string* = "white"

  * **fontFamily**: *string* = "heading"

  * **fontSize**: *number[]* =  [6, 6, 6]

* **large**: *object*

  * **color**: *string* = "white"

  * **fontFamily**: *string* = "heading"

  * **fontSize**: *number[]* =  [5, 5, 5]

* **regular**: *object*

  * **color**: *string* = "white"

  * **fontFamily**: *string* = "heading"

  * **fontSize**: *number* = 4

* **small**: *object*

  * **color**: *string* = "white"

  * **fontFamily**: *string* = "heading"

  * **fontSize**: *number* = 3

___

### `Const` theme

### ▪ **theme**: *object*

*Defined in [styles/theme.js:6](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/styles/theme.js#L6)*

###  breakpoints

• **breakpoints**: *string[]* =  ['640px', '832px', '1024px']

*Defined in [styles/theme.js:10](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/styles/theme.js#L10)*

###  buttons

• **buttons**: *object* =  buttons

*Defined in [styles/theme.js:11](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/styles/theme.js#L11)*

#### Type declaration:

* ### **outline**: *object*

  * **bg**: *string* = "transparent"

  * **borderColor**: *string* = "primary"

  * **color**: *string* = "primary"

  * **&:hover**: *object*

    * **backgroundColor**: *string* = "rgba(26, 171, 155, 0.1)"

    * **transform**: *string* = "translateY(-1px)"

* ### **primary**: *object*

  * **bg**: *string* = "primary"

  * **borderColor**: *string* = "primary"

  * **color**: *string* = "white"

  * **&:hover**: *object*

    * **bg**: *string* = "darkPrimary"

    * **borderColor**: *string* = "darkPrimary"

    * **transform**: *string* = "translateY(-1px)"

* ### **secondary**: *object*

  * **bg**: *string* = "secondary"

  * **borderColor**: *string* = "secondary"

  * **color**: *string* = "white"

  * **&:hover**: *object*

    * **backgroundColor**: *string* = "darkSecondary"

    * **transform**: *string* = "translateY(-1px)"

* ### **text**: *object*

  * **bg**: *string* = "transparent"

  * **borderColor**: *string* = "transparent"

  * **color**: *string* = "primary"

  * **transform**: *string* = "translateY(0px)"

  * **&:hover**: *object*

    * **backgroundColor**: *string* = "transparent"

    * **color**: *string* = "darkPrimary"

    * **transform**: *string* = "translateY(0px)"

###  colors

• **colors**: *object* =  colors

*Defined in [styles/theme.js:12](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/styles/theme.js#L12)*

#### Type declaration:

* **bat**: *string* = "rgb(234, 86, 19)"

* **dark**: *string* = "#222222"

* **darkPrimary**: *string* = "#0d8577"

* **eth**: *string* = "rgb(201, 157, 102)"

* **grey**: *string* = "rgb(55, 74, 97)"

* **lightGrey**: *string* = "#e4e4e4"

* **lightMidGrey**: *string* = "#a3a3a3"

* **lightPrimary**: *string* = "rgb(89, 188, 175)"

* **lightSecondary**: *string* = "rgb(255, 225, 160)"

* **lightWarning**: *string* = "rgb(255, 169, 164)"

* **midGrey**: *string* = "rgb(76, 93, 113)"

* **primary**: *string* = "#1AAB9B"

* **rep**: *string* = "rgb(65, 36, 103)"

* **secondary**: *string* = "#F4B731"

* **superLightGrey**: *string* = "#f5f5f5"

* **superLightPrimary**: *string* = "rgb(216, 238, 235)"

* **superLightSecondary**: *string* = "rgb(255, 246, 228)"

* **superLightWarning**: *string* = "rgb(255, 233, 232)"

* **transparent**: *string* = "transparent"

* **warning**: *string* = "rgb(255,0,0)"

###  fontSizes

• **fontSizes**: *number[]* =  [14, 16, 18, 24, 28, 36, 42]

*Defined in [styles/theme.js:13](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/styles/theme.js#L13)*

###  space

• **space**: *number[]* =  [0, 2, 4, 6, 8, 12, 16, 24, 32, 48]

*Defined in [styles/theme.js:36](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/styles/theme.js#L36)*

###  text

• **text**: *object* =  text

*Defined in [styles/theme.js:37](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/styles/theme.js#L37)*

#### Type declaration:

* ### **body**: *object*

  * **large**: *object*

    * **color**: *string* = "white"

    * **fontFamily**: *string* = "body"

    * **fontSize**: *number* = 3

  * **regular**: *object*

    * **color**: *string* = "white"

    * **fontFamily**: *string* = "body"

    * **fontSize**: *number* = 2

  * **small**: *object*

    * **color**: *string* = "white"

    * **fontFamily**: *string* = "body"

    * **fontSize**: *number* = 0

* ### **heading**: *object*

  * **extra**: *object*

    * **color**: *string* = "white"

    * **fontFamily**: *string* = "heading"

    * **fontSize**: *number[]* =  [6, 6, 6]

  * **large**: *object*

    * **color**: *string* = "white"

    * **fontFamily**: *string* = "heading"

    * **fontSize**: *number[]* =  [5, 5, 5]

  * **regular**: *object*

    * **color**: *string* = "white"

    * **fontFamily**: *string* = "heading"

    * **fontSize**: *number* = 4

  * **small**: *object*

    * **color**: *string* = "white"

    * **fontFamily**: *string* = "heading"

    * **fontSize**: *number* = 3

###  variants

• **variants**: *object* =  variants

*Defined in [styles/theme.js:38](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/styles/theme.js#L38)*

#### Type declaration:

* ### **indicator**: *object*

  * **connected**: *object*

    * **bg**: *string* = "primary"

  * **disconnected**: *object*

    * **bg**: *string* = "lightWarning"

  * **unconnected**: *object*

    * **bg**: *string* = "warning"

▪ **borderWidths**: *object*

*Defined in [styles/theme.js:7](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/styles/theme.js#L7)*

* **default**: *number* = 2

▪ **fontWeights**: *object*

*Defined in [styles/theme.js:14](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/styles/theme.js#L14)*

* **body**: *number* = 400

* **bold**: *number* = 700

* **heading**: *number* = 400

▪ **fonts**: *object*

*Defined in [styles/theme.js:19](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/styles/theme.js#L19)*

* **body**: *string* =  `-apple-system, BlinkMacSystemFont, 
    "Segoe UI", "Roboto", "Oxygen", 
    "Ubuntu", "Cantarell", "Fira Sans", 
    "Droid Sans", "Helvetica Neue", sans-serif;`

* **heading**: *string* =  `-apple-system, BlinkMacSystemFont, 
    "Segoe UI", "Roboto", "Oxygen", 
    "Ubuntu", "Cantarell", "Fira Sans", 
    "Droid Sans", "Helvetica Neue", sans-serif;`

▪ **lineHeights**: *object*

*Defined in [styles/theme.js:29](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/styles/theme.js#L29)*

* **body**: *number* = 1.45

* **heading**: *number* = 1.25

▪ **radii**: *object*

*Defined in [styles/theme.js:33](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/styles/theme.js#L33)*

* **default**: *number* = 4

___

### `Let` variants

### ▪ **variants**: *object*

*Defined in [styles/general-variants.js:1](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/styles/general-variants.js#L1)*

▪ **indicator**: *object*

*Defined in [styles/general-variants.js:2](https://github.com/BackToTheCode/project.vault-maker-v2/blob/ae89107/styles/general-variants.js#L2)*

* **connected**: *object*

  * **bg**: *string* = "primary"

* **disconnected**: *object*

  * **bg**: *string* = "lightWarning"

* **unconnected**: *object*

  * **bg**: *string* = "warning"
