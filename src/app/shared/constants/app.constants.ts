import {AppTableState} from "../model/common/app-table.state";

export const RESPONSE_CODE = {
    SUCCESS: '00',
    SYSTEM_UNAVAILABLE: 'SYSTEM_UNAVAILABLE',
    BUSINESS_EXCEPTION: 'BUSINESS_EXCEPTION'
};

export const STATUS = {
    TEMP: 'TEMP',
    CREATED: 'CREATED',
    EDITED: 'EDITED',
    DELETED: 'DELETED'
};

export const REGEX = {
    PHONE_NUMBER: '(84|0[3|5|7|8|9])+([0-9]{8})\\b',
    ONLY_NUMBER: '^[0-9]*$',
};

export const TABLE_STATE: AppTableState = {
    totalCount: 0,
    pageSize: 20,
    currentPage: 0,
    pageSizeOptions: [10, 20, 50]
}

export function tableState(): AppTableState {
    return JSON.parse(JSON.stringify(TABLE_STATE));
}

export const CURRENCIES = {
    'AUD': {
        'name': 'Australian Dollar',
        'fractionSize': 2,
        'symbol': {
            'grapheme': '$',
            'template': '$1',
            'rtl': false,
            'separator': {
                'decimal': '.',
                'thousands': ','
            }
        },
        'uniqSymbol': {
            'grapheme': 'A$',
            'template': '$1',
            'rtl': false
        }
    },
    'CAD': {
        'name': 'Canadian Dollar',
        'fractionSize': 2,
        'symbol': {
            'grapheme': '$',
            'template': '$1',
            'rtl': false,
            'separator': {
                'decimal': '.',
                'thousands': ','
            }
        },
        'uniqSymbol': {
            'grapheme': 'CA$',
            'template': '$1',
            'rtl': false
        }
    },
    'CHF': {
        'name': 'Swiss Franc',
        'fractionSize': 2,
        'symbol': {
            'grapheme': 'CHF',
            'template': '$1',
            'rtl': false,
            'separator': {
                'decimal': '.',
                'thousands': ','
            }
        },
        'uniqSymbol': {
            'grapheme': 'CHF',
            'template': '$1',
            'rtl': false
        }
    },
    'CNY': {
        'name': 'Yuan Renminbi',
        'fractionSize': 2,
        'symbol': {
            'grapheme': '元',
            'template': '$1',
            'rtl': false,
            'separator': {
                'decimal': '.',
                'thousands': ','
            }
        },
        'uniqSymbol': {
            'grapheme': '元',
            'template': '$1',
            'rtl': false
        }
    },
    'EUR': {
        'name': 'Euro',
        'fractionSize': 2,
        'symbol': {
            'grapheme': 'EUR',
            'template': '1 EUR',
            'rtl': false,
            'separator': {
                'decimal': '.',
                'thousands': ','
            }
        },
        'uniqSymbol': {
            'grapheme': '€',
            'template': '$1',
            'rtl': false
        }
    },
    'GBP': {
        'name': 'Pound Sterling',
        'fractionSize': 2,
        'symbol': {
            'grapheme': 'GBP',
            'template': '1 GBP',
            'rtl': false,
            'separator': {
                'decimal': '.',
                'thousands': ','
            }
        },
        'uniqSymbol': {
            'grapheme': '£',
            'template': '$1',
            'rtl': false
        }
    },
    'HKD': {
        'name': 'Hong Kong Dollar',
        'fractionSize': 2,
        'symbol': {
            'grapheme': 'HKD',
            'template': '1 HKD',
            'rtl': false,
            'separator': {
                'decimal': '.',
                'thousands': ','
            }
        },
        'uniqSymbol': {
            'grapheme': 'HK$',
            'template': '$1',
            'rtl': false
        }
    },
    'JPY': {
        'name': 'Yen',
        'fractionSize': 0,
        'symbol': {
            'grapheme': 'JPY',
            'template': '1 JPY',
            'rtl': false,
            'separator': {
                'decimal': '.',
                'thousands': ','
            }
        },
        'uniqSymbol': {
            'grapheme': '¥',
            'template': '$1',
            'rtl': false
        }
    },
    'NOK': {
        'name': 'Norwegian Krone',
        'fractionSize': 2,
        'symbol': {
            'grapheme': 'kr',
            'template': '1 $',
            'rtl': false,
            'separator': {
                'decimal': '.',
                'thousands': ','
            }
        },
        'uniqSymbol': null
    },
    'NZD': {
        'name': 'New Zealand Dollar',
        'fractionSize': 2,
        'symbol': {
            'grapheme': '$',
            'template': '$1',
            'rtl': false,
            'separator': {
                'decimal': '.',
                'thousands': ','
            }
        },
        'uniqSymbol': {
            'grapheme': 'NZ$',
            'template': '$1',
            'rtl': false
        }
    },
    'SEK': {
        'name': 'Swedish Krona',
        'fractionSize': 2,
        'symbol': {
            'grapheme': 'kr',
            'template': '1 $',
            'rtl': false,
            'separator': {
                'decimal': '.',
                'thousands': ','
            }
        },
        'uniqSymbol': null
    },
    'SGD': {
        'name': 'Singapore Dollar',
        'fractionSize': 2,
        'symbol': {
            'grapheme': '$',
            'template': '$1',
            'rtl': false,
            'separator': {
                'decimal': '.',
                'thousands': ','
            }
        },
        'uniqSymbol': {
            'grapheme': 'S$',
            'template': '$1',
            'rtl': false
        }
    },
    'THB': {
        'name': 'Baht',
        'fractionSize': 2,
        'symbol': {
            'grapheme': '฿',
            'template': '$1',
            'rtl': false,
            'separator': {
                'decimal': '.',
                'thousands': ','
            }
        },
        'uniqSymbol': {
            'grapheme': '฿',
            'template': '$1',
            'rtl': false
        }
    },
    'USD': {
        'name': 'US Dollar',
        'fractionSize': 2,
        'symbol': {
            'grapheme': 'USD',
            'template': '1 USD',
            'rtl': false,
            'separator': {
                'decimal': '.',
                'thousands': ','
            }
        }
    },
    'VND': {
        'name': 'Viet Nam Dong',
        'fractionSize': 0,
        'symbol': {
            'grapheme': 'VND',
            'template': '1 VND',
            'rtl': false,
            'separator': {
                'decimal': '.',
                'thousands': ','
            }
        }
    },
    'KRW': {
        'name': 'Hong Kong Dollar',
        'fractionSize': 2,
        'symbol': {
            'grapheme': 'HKD',
            'template': '1 HKD',
            'rtl': false,
            'separator': {
                'decimal': '.',
                'thousands': ','
            }
        },
        'uniqSymbol': {
            'grapheme': 'HK$',
            'template': '$1',
            'rtl': false
        }
    },
    'MMM': {
        'name': 'Swiss Franc',
        'fractionSize': 2,
        'symbol': {
            'grapheme': 'MMM',
            'template': '$1',
            'rtl': false,
            'separator': {
                'decimal': '.',
                'thousands': ','
            }
        },
        'uniqSymbol': {
            'grapheme': 'MMM',
            'template': '$1',
            'rtl': false
        }
    },
    'XAU': {
        'name': 'Gold',
        'fractionSize': 2,
        'symbol': {
            'grapheme': 'XAU',
            'template': '$1',
            'rtl': false,
            'separator': {
                'decimal': '.',
                'thousands': ','
            }
        },
        'uniqSymbol': {
            'grapheme': 'XAU',
            'template': '$1',
            'rtl': false
        }
    },
};

