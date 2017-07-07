export const staffTemplate =
{
    "type": "view",
    "fields": 
    [
        {
        "field": "emailNotification",
        "map": "emailOnApprovedWO"
        }
    ],
    "body": {
        "elements":
        [
            {
                "element":"h2",
                "content":"Header"
            },
            {    
                "element":"group",
                "id": "groupHeader",
                "title": "Header Info",
                "elements": 
                [
                    {
                        "id":"code",
                        "element": "input",
                        "title": "Code",
                        "field": "code",
                        "attributes": 
                        {
                            "required": "true"
                        }
                    },
                    {
                        "id":"description",
                        "element": "input",
                        "title": "Description",
                        "field": "description"
                    },
                    {
                        "id":"site",
                        "element": "input",
                        "title": "Site",
                        "field": "siteDescription",
                        "attributes": 
                        {
                            "required": "true"
                        }
                    }
                ]
            },
            {
                "element":"h2",
                "content":"Personal Details"
            },
            {    
                "element":"group",
                "id": "groupDetails",
                "title": "Personal Details",
                "elements": 
                [
                    {
                        "id":"initials",
                        "element": "input",
                        "title": "Initials",
                        "field": "initials"
                    },
                    {
                        "id":"firstname",
                        "element": "input",
                        "title": "First name",
                        "field": "firstName",
                        "attributes": 
                        {
                            "required": "true"
                        }
                    },
                    {
                        "id":"lastname",
                        "element": "input",
                        "title": "Last name",
                        "field": "lastName",
                        "attributes": 
                        {
                            "required": "true"
                        }
                    },
                    {
                        "id":"job",
                        "element": "input",
                        "title": "Job title",
                        "field": "jobTitle"
                    },
                    {
                        "id":"post",
                        "element": "input",
                        "title": "Post number",
                        "field": "postNumber"
                    },
                    {
                        "id":"personnel",
                        "element": "input",
                        "title": "Personnel number",
                        "field": "personnelNumber"
                    }
                ]
            },
            {    
                "element":"group",
                "id": "groupContact",
                "title": "Contact Info",
                "elements": 
                [
                    {
                        "id":"phone",
                        "element": "input",
                        "title": "Phone",
                        "field": "phoneNumber"
                    },
                    {
                        "id":"email",
                        "element": "input",
                        "title": "Email",
                        "field": "email"
                    },
                    {
                        "id":"address1",
                        "element": "input",
                        "title": "Address 1",
                        "field": "address1"
                    },
                    {
                        "id":"address2",
                        "element": "input",
                        "title": "Address 2",
                        "field": "address2"
                    },
                    {
                        "id":"address2",
                        "element": "input",
                        "title": "Address 2",
                        "field": "address2"
                    }
                ]
            },
            {
                "element":"h2",
                "content":"Maintenance Manager"
            },
            {    
                "element":"group",
                "id": "groupMaintenance",
                "title": "Maintenance",
                "elements": 
                [
                    {
                        "id":"sectionCode",
                        "element": "input",
                        "title": "Section",
                        "field": "sectionCode",
                        "attributes": 
                        {
                            "required": "true"
                        }
                    },
                    {
                        "id":"trade",
                        "element": "input",
                        "title": "Trade",
                        "field": "trade",
                        "attributes": 
                        {
                            "required": "true"
                        }
                    },
                    {
                        "id":"costElement",
                        "element": "input",
                        "title": "Cost element",
                        "field": "costElement",
                        "attributes": 
                        {
                            "required": "true"
                        }
                    },
                    {
                        "id":"calendar",
                        "element": "input",
                        "title": "Calendar",
                        "field": "calendar",
                        "attributes": 
                        {
                            "required": "true"
                        }
                    }
                ]
            },
            {    
                "element":"group",
                "id": "groupRates",
                "title": "Rates per hour",
                "elements": 
                [
                    {
                        "id":"currency",
                        "element": "input",
                        "title": "Curency",
                        "field": "curency",
                        "attributes": 
                        {
                            "required": "true"
                        }
                    },
                    {
                        "id":"normalTime",
                        "element": "input",
                        "title": "Normal time",
                        "field": "normalTime",
                        "attributes": 
                        {
                            "required": "true"
                        }
                    },
                    {
                        "id":"overtime1",
                        "element": "input",
                        "title": "Overtime 1",
                        "field": "overtime1",
                        "attributes": 
                        {
                            "required": "true"
                        }
                    },
                    {
                        "id":"overtime2",
                        "element": "input",
                        "title": "Overtime 2",
                        "field": "overtime2",
                        "attributes": 
                        {
                            "required": "true"
                        }
                    },
                    {
                        "id":"overtime3",
                        "element": "input",
                        "title": "Overtime 3",
                        "field": "overtime3",
                        "attributes": 
                        {
                            "required": "true"
                        }
                    }
                ]
            },
            {    
                "element":"group",
                "id": "groupNotifications",
                "title": "Notifications",
                "elements": 
                [
                    {
                        "id":"emailNotification",
                        "element": "checkbox",
                        "title":"Email on work order approval",
                        "field":"emailOnApprovedWO"           
                    },
                    {
                        "id":"smsNotification",
                        "element": "checkbox",
                        "title":"SMS on work order approval",
                        "field":"smsOnApprovedWO"
                    },
                    {
                        "id":"smsCritical",
                        "element": "checkbox",
                        "title":"SMS for critical assets only",
                        "field":"smsForCriticalAsset"
                    }
                ]
            },
            {
                "element":"h2",
                "content":"Geograohic data"
            },
            {    
                "element":"group",
                "id": "groupGeographic",
                "title": "Geographic location"
            }
        ]
    }
};
