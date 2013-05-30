jmvc-component-table
====================

A flexible table component for JMVC 3.2.4.

## API
$('#someElement').frogui_components_table({
    object literal `headers`, JMVC list `rows`, [ string `template` ]
})

## Overview
This component has been designed to allow users to generate a table with minimum effort whilst maintaining flexibility and enforcing adherence to the JMVC standards.

### Key Features
- Data Integrity - Concise errors thrown if correct data types are not provided.
- Reusable - One-size-fits-all view template with the option to override the default template
- Simplistic - Renders a table, and that's it!

## Getting Started
### Quick-start
    $('#someElement').frogui_components_table({
        headers: {
            name: "Name",
            age: "Age"
        },
        rows: Users
    })
    
### Your own view template
    $('#someElement').frogui_components_table({
        headers: {
            name: "Name",
            age: "Age"
        },
        rows: Users,
        template: '//userApp/views/tableOverride.ejs'
    })
As you are providing the data you can reference that data in your templates.

## Additional Info
This component needs tests!

### Suggestions & Questions
chris.saunders@frogtrade.com
