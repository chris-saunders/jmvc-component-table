jmvc-component-table
====================

A table component for JMVC 3.2.4.

## API
### Parameters
- `headers` (object literal)
- `rows` (JMVC list)
- `template` *optional* (string)

Both `headers` and `rows` arguments must be satisfied for the table to correctly render.

## Overview
This component has been designed to allow users to generate a table with minimum effort whilst maintaining flexibility and enforcing adherence to the JMVC standards.

### Key Features
- Data Integrity - Concise errors thrown if correct data types are not provided.
- Reusable - One-size-fits-all view template with the option to override the default template
- Simplistic - Renders a table, and that's it!

## Getting Started
### Quick-start
    $('#someElement').table({
        headers: {
            name: "Name",
            age: "Age"
        },
        rows: Users
    })
    
### Your own view template
    $('#someElement').table({
        headers: {
            name: "Name",
            age: "Age"
        },
        rows: Users,
        template: '//userApp/views/tableOverride.ejs'
    })

## Additional Info
This component needs tests!
