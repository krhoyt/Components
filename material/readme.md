# Material Design

Various [Material Design](http://material.io) themed components.

- [App Bar](#app-bar)
- [Column](#column)
- [Label](#label)
- [Row](#row)
- [Search](#search)
- [Spacer](#spacer)
- [Toolbar](#toolbar)

## App Bar

Information about current screen.

### Attributes

- concealed (boolean): Visibility hidden
- hidden (boolean): Display none

### Styles

- --bar-background-color (transparent)
- --bar-background-image (none)

## Column

Container. Shorthand for flex box column.

### Attributes

- concealed (boolean): Visibility hidden
- hidden (boolean): Display none

## Label

Display text.

### Attributes

- concealed (boolean): Visibility hidden
- hidden (boolean): Display none
- truncate (boolean): Single line with ellipsis

### Styles

- --label-color (#333333)
- --label-cursor (default)
- --label-font-family ('Roboto', sans-serif)
- --label-font-size (14px)
- --label-font-weight (400)
- --label-text-align (left)

### Parts

- label: Underlying paragraph ("p") element

## Row

Container. Shorthand for flex box row.

### Attributes

- concealed (boolean): Visibility hidden
- hidden (boolean): Display none

## Search

Search field for use in [App Bar](#app-bar).

### Attributes

- concealed (boolean): Visibility hidden
- hidden (boolean): Display none
- placeholder (string): Placeholder text

### Events

- searchCancel: Search operation cancelled
- searchChange: Contents of input have changed

### Styles

- --search-font-family ('Roboto', sans-serif)
- --search-font-size (16px)
- --search-input-color (#333333)
- --search-placeholder-color (#757575)

### Parts

- arrow: Arrow/cancel button
- input: Underlying input element
- microphone: Microphone button

## Spacer

Flex box or fixed width gaps between components.

### Attributes

- concealed (boolean): Visibility hidden
- hidden (boolean): Display none
- width (number): In pixels, otherwise "flex-grow"

## Toolbar

Horizontally laid out information for use in [App Bar](#app-bar).

### Attributes

- concealed (boolean): Visibility hidden
- hidden (boolean): Display none

### Styles

- --toolbar-height (56px)

