export gNOME=pessoa
export gNOMEQ=Pessoa
export gSCHEMA="({'uid': 'String',
    'username': 'String',
    'fullName': 'String',
    'provider': 'String',
    'telephone': 'String',
    'image': String,
    'role': {
        'type': 'String',
        'default': 'user'
    },
    'email': 'String',
    'registerDate': {
        'type': 'Date',
        'default': 'Date.now'
    },
    'accountState': {
        'type': 'String',
        'default': 'waiting'
    },
    'pass': String,
    'salt': String})"
node geraApi.js
