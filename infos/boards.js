[{
    "architecture": "avr"
    , "bootloader": {
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {bootloader.verbose} -patmega328p -c{protocol} {program.extra_params} \"-Uflash:w:{runtime.platform.path}/bootloaders/optiboot/optiboot_atmega328.hex:i\" -Ulock:w:0x0F:m"
        , "signature": "16415a473927904c2929ebdce541db9bc9ec810b500c25832735deb2ce230a37bc42ddc35374c8ed40683ab8c8f19396cf23e31fa194072d70f574ecac9716f48fd7b37f18f80d7ae02f31e193ae4f4a2f44091c18fdaf25ca757ae3d7af07edc4d7065072e56da56410a50acfa4db4cb15e7f0345e1f889582c0cd05d0b83f89502142a33665efd404a3e94a8f6360ed81efdff9aad2a8e95ba04e52600cc90391ed0c89e3528ada65a39f81f2b19fd0d30d39375d1be327e781092f595c319c0e6a490283b86ea90ddb98c30527028f1d1069d50852a0e6838a4d2c43991b197d0ee5c2d24a32fd598a23281df281781ca3bda1310a82ba4fc829c37fff6fa"
    }
    , "build": [{
        "flavour": "default"
        , "fqbn": "arduino:avr:unowifi"
    }]
    , "default_flavour": "default"
    , "fqbn": "arduino:avr:unowifi"
    , "id": "unowifi"
    , "name": "Arduino Uno WiFi"
    , "package": "arduino"
    , "pid": ["0x2A03"]
    , "upload": [{
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {upload.verbose}  -patmega328p -carduino -P{serial.port} -b115200 -D \"-Uflash:w:{build.path}/{build.project_name}.hex:i\""
        , "ext": ".hex"
        , "flavour": "default"
        , "options": {
            "maximum_data_size": "2048"
            , "maximum_size": "32256"
            , "network.endpoint_reset": "/log/reset"
            , "network.endpoint_sync": "/pgm/sync"
            , "network.endpoint_upload": "/pgm/upload"
            , "network.port": "80"
            , "network.sync_return": "204:SYNC"
            , "protocol": "arduino"
            , "signature": "818f95e84bd149f2ad3cf82d383ca674b342f994921b34087afc6acc10b60370252fdf138a1f8e20666be623e13fdf976e4db145ded20cac7d324ae3f398093e8644f4f575bf65d988db0e9e4bd832756d54bc07b6478100c615ae49272f4b1eece680850fd8c63d772883783f4ea8e122a8e189e253c90978a6417cf4217e7c88d06fd2e470ffbad316537669b6db9b7de9709934aab3f12de5c3a2a8df30a91a84acf66487ed80cc286a50a598f855f4df4296eba07e49f054e0fec0d32b0928a68e6634cf656f41a3c663fbdf4e48b253dcfa02cc2d0826c216e4c2e979f5b43b1a2f171f75ea0fecf61b094a1896a8494eceda7899a4a02ca75d1f40790b"
            , "speed": "115200"
        }
        , "params": {
            "noverify": "-V"
            , "quiet": "-q -q"
            , "verbose": "-v"
        }
        , "tool": "avrdude"
        , "tool_version": "6.3.0-arduino8"
    }]
    , "vid": ["0x2A03"]
}, {
    "architecture": "samd"
    , "bootloader": {
        "commandline": "\"{runtime.tools.openocd-0.9.0-arduino.path}/bin/openocd\" {bootloader.verbose} -s \"{runtime.tools.openocd-0.9.0-arduino.path}/share/openocd/scripts/\" -f \"{runtime.platform.path}/variants/mkrzero/openocd_scripts/arduino_zero.cfg\" -c \"telnet_port disabled; init; halt; at91samd bootloader 0; program {{{runtime.platform.path}/bootloaders/mkrzero/samd21_sam_ba_arduino_mkrzero.bin}} verify reset; shutdown\""
        , "signature": "71b767bd31ae4d163570421d58c4f44dcab0159e18c155bf0e5c06b5a753ba4d43a048100b2a704d6e4403047c6dcc7a433c367180624bfef4dbeed6d68d6f62014102b334ff7ded1551aa49b0523e3e116e24a55c64d12c6bda5966cdbb2cb5783ffa02d8b6823df1fbc2b43d9d8cff46bbabe42e3dfc89e82ede60f85ea9f5a798dcad5a8a1057f3e3244eeb35b5a0c3715eacf1b7c2005f0eaf980df26454994c6109ddb796f57d7a6e35df3ae23b3498b70541658cc8c790397d486de4393e5fff120270be6a018c1f5e2d8967fc5816f84738b2f9405e40cd658b4a13daa477fcdae56c74f1d85784de8abd4858a75161221fd4195f7bf979c5a0e6c5b2"
    }
    , "build": [{
        "flavour": "default"
        , "fqbn": "arduino:samd:mkrzero"
    }]
    , "default_flavour": "default"
    , "fqbn": "arduino:samd:mkrzero"
    , "id": "mkrzero"
    , "name": "Arduino MKRZero"
    , "package": "arduino"
    , "pid": ["0x2341", "0x2341"]
    , "upload": [{
        "commandline": "\"{runtime.tools.bossac-1.7.0.path}/bossac\" {upload.verbose} --port={serial.port.file} -U true -i -e -w -v \"{build.path}/{build.project_name}.bin\" -R"
        , "ext": ".bin"
        , "flavour": "default"
        , "options": {
            "maximum_size": "262144"
            , "native_usb": "true"
            , "protocol": "sam-ba"
            , "signature": "66695789d14908f52cb1964da58ec9fa816d6ddb321900c60ad6ec2d84a7c713abb2b71404030c043e32cf548736eb706180da8256f2533bd132430896437c72b396abe19e632446f16e43b80b73f5cf40aec946d00e7543721cc72d77482a84d2d510e46ea6ee0aaf063ec267b5046a1ace36b7eb04c64b4140302586f1e10eda8452078498ab5c9985e8f5d521786064601daa5ba2978cf91cfeb64e83057b3475ec029a1b835460f4e203c1635eaba812b076248a3589cd5d84c52398f09d255f8aae25d66a40d5ab2b1700247defbdfd044c77d44078197d1f543800e11f79d6ef1c6eb46df65fe2fffd81716b11d798ba21a3ca2cb20f6d955d8e1f8aef"
            , "use_1200bps_touch": "true"
            , "wait_for_upload_port": "true"
        }
        , "params": {
            "quiet": ""
            , "verbose": "-i -d"
        }
        , "tool": "bossac"
        , "tool_version": "1.7.0"
    }]
    , "vid": ["0x2341", "0x2341"]
}, {
    "architecture": "avr"
    , "bootloader": {
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {bootloader.verbose} -patmega32u4 -c{protocol} {program.extra_params} \"-Uflash:w:{runtime.platform.path}/bootloaders/caterina-Arduino_Robot/Caterina-Robot-Motor.hex:i\" -Ulock:w:0x2F:m"
        , "signature": "3185a390eced4320f57adf30d502890eb04b3db78dbc7c3d2c36133104cd13e53987def1bb3f49d9e9703bee8c7d81fbb8a54665d065e67187a4ed8128b1f0fb3c86cc5a0dcf47f9c12b0666d91ae087ad71d838f69b620e678d537dad14229d84b69e13e204a5bb4db19f8a848b69ab39d180f1239f6767d5f6fd2811afb6987f595d860fb4b1e7163f9c4a9d19ddda92c65db039c3bca4c4c00bd8867cd8e81fed6a29d99dfa235bcb7396f0266fcd932c592219bee0f3ff15845cf71fa1e1f9e3ede2a25da649d1a9313db419a556019892378243947f20c31052dcc3db4e883322d970748873945da7a0c676ef1ddde8be2f5ee551645c17c638714df786"
    }
    , "build": [{
        "flavour": "default"
        , "fqbn": "arduino:avr:robotMotor"
    }]
    , "default_flavour": "default"
    , "fqbn": "arduino:avr:robotMotor"
    , "id": "robotMotor"
    , "name": "Arduino Robot Motor"
    , "package": "arduino"
    , "pid": ["0x2A03", "0x2A03", "0x2341", "0x2341"]
    , "upload": [{
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {upload.verbose}  -patmega32u4 -cavr109 -P{serial.port} -b57600 -D \"-Uflash:w:{build.path}/{build.project_name}.hex:i\""
        , "ext": ".hex"
        , "flavour": "default"
        , "options": {
            "disable_flushing": "true"
            , "maximum_data_size": "2560"
            , "maximum_size": "28672"
            , "protocol": "avr109"
            , "signature": "15a80bb8e911d82ee8c36d14bc5c00348f307ac8eaba5357366eeeb776a2e4eefa85a061d22ebde27482841de67e95d471700e8487adf3adda94d2b1091c68ab4d5b5098ad6f3f0e63878be52b3459a3966e82bbf0f160f13f2fcbc2ae06f296271f19bc8fef67e038b12746fc863e76df2929ee6f2f18b604825615179da99d6a62f9e6ac6ce88f4b80c1399c9e81b734c938b34cfc1147e111bafa2ccab786cc6649baa61e45f6bf8a7a41607052207f00b3fa1c10c518804d19de55af182019ee32d99405dedfd970cd0be57953b26c6b6ca3343e25a39936583cad9894e209a38c09eb8bd74d4df99812c8a939001f0242c544b43e5f853c02de949a29a8"
            , "speed": "57600"
            , "use_1200bps_touch": "true"
            , "wait_for_upload_port": "true"
        }
        , "params": {
            "noverify": "-V"
            , "quiet": "-q -q"
            , "verbose": "-v"
        }
        , "tool": "avrdude"
        , "tool_version": "6.3.0-arduino8"
    }]
    , "vid": ["0x2A03", "0x2A03", "0x2341", "0x2341"]
}, {
    "architecture": "avr"
    , "bootloader": {
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {bootloader.verbose} -p{build.mcu} -c{protocol} {program.extra_params} \"-Uflash:w:{runtime.platform.path}/bootloaders/{bootloader.file}:i\" -Ulock:w:0x0F:m"
        , "signature": "6c0de0c02e2c8feb902d672025b0feb1e7ef380f00c87d4ebe1b63bc91957de5311517cd949cef93ae4f98dfbd159b7a034d3d68889c88e6febd4952375511d2516c7d94c0a4085c6631be971187397a9989ff5d27ca9a908c6535179fd3893d83cd4771c3a2da0927042e0828f0967dbde200b20c7e52bc13b9468248ba7ce4ac29471f55a9a94627fc2f8227b454bdf7f77a6e74b959f2f959a28357f3947b6a92648c0eb875aac808317d6fc8958be6959779227d8f09f8ff813dbb4fcea5095107bd0348f8085a229d733c97164c032701cd6e5d392c8f71ac006afdaa8cd885ff68f5a2c690445f1df5a274cb5194795be35d33e1a23c4936068e62f6bc"
    }
    , "build": [{
        "flavour": "atmega168"
        , "fqbn": "arduino:avr:diecimila:cpu=atmega168"
    }, {
        "flavour": "atmega328"
        , "fqbn": "arduino:avr:diecimila:cpu=atmega328"
    }]
    , "default_flavour": "atmega328"
    , "fqbn": "arduino:avr:diecimila:cpu=atmega328"
    , "id": "diecimila"
    , "name": "Arduino Duemilanove or Diecimila"
    , "package": "arduino"
    , "upload": [{
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {upload.verbose}  -patmega168 -carduino -P{serial.port} -b19200 -D \"-Uflash:w:{build.path}/{build.project_name}.hex:i\""
        , "ext": ".hex"
        , "flavour": "atmega168"
        , "options": {
            "signature": "44329ed10991e0d10061f165ef7d9768327a7d83c10be3cd94ccf4a28ec577d80572a0bc785bbaea4bc3b30f865dc78fdb58ef89e35d3b8c58cd0f44f00cd157a6e273323133576a698f1506c5fad9d151372ce16ed1149aca0953da61f69285d6f859781c2314e6b1a2f315e692638680d505c6832c0e4bf825a29f2be25dae94642d027c45257dc1d07dff159c4017073c1a8b50fbfd23616d3fccb4098a981cc6110e062a6b0dae6a3f2f9e4388baacd879e3c44a64e7e7ec0d4d48bb3c24206fa2fdabbe73f6a72b1eb824b2260dfb777a656756c0b37fadc6486e4994c138cbb0405018f2c8019605bbebeb9a7d9e273711fa356715258619c708cab90e"
        }
        , "params": {
            "noverify": "-V"
            , "quiet": "-q -q"
            , "verbose": "-v"
        }
        , "tool": "avrdude"
        , "tool_version": "6.3.0-arduino8"
    }, {
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {upload.verbose}  -patmega328p -carduino -P{serial.port} -b57600 -D \"-Uflash:w:{build.path}/{build.project_name}.hex:i\""
        , "ext": ".hex"
        , "flavour": "atmega328"
        , "options": {
            "signature": "945c13862d3bc08bd212970e6e5f9784207a3c503c0f086e6a948a7b2ddd23ab424cc1ea5ebc408a59b30cae59d2b2366fc2a89d753c951afe4245e0e8eba194874740eae41d5c504f9c33596bfb832dd628225ee20a7754d8726a51d6596a3a44f63cff38924089e131d968cdc739ef42d27078d04360ef9aedc3c359f72d201c4ebc4fab25a22d1a66c10faa27f72daca89b9069c10cd5865c6f42d8d6c14f70285dbd2ca67fb09dfb551a12f09df252a4993f0131759c632db462e3ec1a9e20f6cc564cda1e3f25324064ec6c038712713a12b4cbadea74bc67ba05404b21235adf450194746ec60fc483e315e082aa6e9698ecb2292fdfd955aab0404b15"
        }
        , "params": {
            "noverify": "-V"
            , "quiet": "-q -q"
            , "verbose": "-v"
        }
        , "tool": "avrdude"
        , "tool_version": "6.3.0-arduino8"
    }]
}, {
    "architecture": "avr"
    , "bootloader": {
        "commandline": ""
        , "signature": "55664ae12c257330bf47f8db4c66d0f46a0f0ff1d1c70e6f345def1f91db21044bcba010b5b7a33aaa97ee65e19baa68ccb0e198af486252ca42911d5a5660e2f6b5f5d0d76f6ec2eb9594238abb857fe5c3fc1263d1861f5e9adbe78eb108acfcd07701e7148b605031ecab5b780c210d2e409e061cfb24fc4aaada046e295ebdd986adec9d9ac1faacfbce4d55c36c0fe98e40268f3aef7708d250819a005184ae01285866712f28bbcd092da5b9d4a4f7b67d98f81856244a2e7c09b8eb54e5dff3ca60051634c3a05c6410ff3fa78bf1ba2ac0c6b36015a0eba35119211574b3d4ca8ab3dd2a144d1da50212972038359e6603c8d5ee26b4931b9f18d2aa"
    }
    , "build": [{
        "flavour": "default"
        , "fqbn": "atmel-avr-xminis:avr:atmega168pb_xplained_mini"
    }]
    , "default_flavour": "default"
    , "fqbn": "atmel-avr-xminis:avr:atmega168pb_xplained_mini"
    , "id": "atmega168pb_xplained_mini"
    , "name": "Atmel atmega168pb Xplained mini"
    , "package": "atmel-avr-xminis"
    , "pid": ["0x03eb"]
    , "upload": [{
        "commandline": ""
        , "ext": ""
        , "flavour": "default"
        , "options": {
            "maximum_data_size": "1024"
            , "maximum_size": "15872"
            , "protocol": "arduino"
            , "signature": "55664ae12c257330bf47f8db4c66d0f46a0f0ff1d1c70e6f345def1f91db21044bcba010b5b7a33aaa97ee65e19baa68ccb0e198af486252ca42911d5a5660e2f6b5f5d0d76f6ec2eb9594238abb857fe5c3fc1263d1861f5e9adbe78eb108acfcd07701e7148b605031ecab5b780c210d2e409e061cfb24fc4aaada046e295ebdd986adec9d9ac1faacfbce4d55c36c0fe98e40268f3aef7708d250819a005184ae01285866712f28bbcd092da5b9d4a4f7b67d98f81856244a2e7c09b8eb54e5dff3ca60051634c3a05c6410ff3fa78bf1ba2ac0c6b36015a0eba35119211574b3d4ca8ab3dd2a144d1da50212972038359e6603c8d5ee26b4931b9f18d2aa"
            , "speed": "57600"
        }
        , "tool": "arduino:avrdude"
        , "tool_version": ""
    }]
    , "vid": ["0x03eb"]
}, {
    "architecture": "win10"
    , "bootloader": {
        "commandline": ""
        , "signature": "55664ae12c257330bf47f8db4c66d0f46a0f0ff1d1c70e6f345def1f91db21044bcba010b5b7a33aaa97ee65e19baa68ccb0e198af486252ca42911d5a5660e2f6b5f5d0d76f6ec2eb9594238abb857fe5c3fc1263d1861f5e9adbe78eb108acfcd07701e7148b605031ecab5b780c210d2e409e061cfb24fc4aaada046e295ebdd986adec9d9ac1faacfbce4d55c36c0fe98e40268f3aef7708d250819a005184ae01285866712f28bbcd092da5b9d4a4f7b67d98f81856244a2e7c09b8eb54e5dff3ca60051634c3a05c6410ff3fa78bf1ba2ac0c6b36015a0eba35119211574b3d4ca8ab3dd2a144d1da50212972038359e6603c8d5ee26b4931b9f18d2aa"
    }
    , "build": [{
        "flavour": "arm"
        , "fqbn": "Microsoft:win10:w10iotcore:cpu=arm"
    }, {
        "flavour": "x86"
        , "fqbn": "Microsoft:win10:w10iotcore:cpu=x86"
    }]
    , "default_flavour": "default"
    , "fqbn": "Microsoft:win10:w10iotcore"
    , "id": "w10iotcore"
    , "name": "Windows 10 IoT Core"
    , "package": "Microsoft"
    , "upload": [{
        "commandline": ""
        , "ext": ""
        , "flavour": "arm"
        , "options": {
            "signature": "55664ae12c257330bf47f8db4c66d0f46a0f0ff1d1c70e6f345def1f91db21044bcba010b5b7a33aaa97ee65e19baa68ccb0e198af486252ca42911d5a5660e2f6b5f5d0d76f6ec2eb9594238abb857fe5c3fc1263d1861f5e9adbe78eb108acfcd07701e7148b605031ecab5b780c210d2e409e061cfb24fc4aaada046e295ebdd986adec9d9ac1faacfbce4d55c36c0fe98e40268f3aef7708d250819a005184ae01285866712f28bbcd092da5b9d4a4f7b67d98f81856244a2e7c09b8eb54e5dff3ca60051634c3a05c6410ff3fa78bf1ba2ac0c6b36015a0eba35119211574b3d4ca8ab3dd2a144d1da50212972038359e6603c8d5ee26b4931b9f18d2aa"
        }
        , "tool": "icad"
        , "tool_version": ""
    }, {
        "commandline": ""
        , "ext": ""
        , "flavour": "x86"
        , "options": {
            "signature": "55664ae12c257330bf47f8db4c66d0f46a0f0ff1d1c70e6f345def1f91db21044bcba010b5b7a33aaa97ee65e19baa68ccb0e198af486252ca42911d5a5660e2f6b5f5d0d76f6ec2eb9594238abb857fe5c3fc1263d1861f5e9adbe78eb108acfcd07701e7148b605031ecab5b780c210d2e409e061cfb24fc4aaada046e295ebdd986adec9d9ac1faacfbce4d55c36c0fe98e40268f3aef7708d250819a005184ae01285866712f28bbcd092da5b9d4a4f7b67d98f81856244a2e7c09b8eb54e5dff3ca60051634c3a05c6410ff3fa78bf1ba2ac0c6b36015a0eba35119211574b3d4ca8ab3dd2a144d1da50212972038359e6603c8d5ee26b4931b9f18d2aa"
        }
        , "tool": "icad"
        , "tool_version": ""
    }]
}, {
    "architecture": "avr"
    , "bootloader": {
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {bootloader.verbose} -p{build.mcu} -c{protocol} {program.extra_params} \"-Uflash:w:{runtime.platform.path}/bootloaders/{bootloader.file}:i\" -Ulock:w:0x0F:m"
        , "signature": "6c0de0c02e2c8feb902d672025b0feb1e7ef380f00c87d4ebe1b63bc91957de5311517cd949cef93ae4f98dfbd159b7a034d3d68889c88e6febd4952375511d2516c7d94c0a4085c6631be971187397a9989ff5d27ca9a908c6535179fd3893d83cd4771c3a2da0927042e0828f0967dbde200b20c7e52bc13b9468248ba7ce4ac29471f55a9a94627fc2f8227b454bdf7f77a6e74b959f2f959a28357f3947b6a92648c0eb875aac808317d6fc8958be6959779227d8f09f8ff813dbb4fcea5095107bd0348f8085a229d733c97164c032701cd6e5d392c8f71ac006afdaa8cd885ff68f5a2c690445f1df5a274cb5194795be35d33e1a23c4936068e62f6bc"
    }
    , "build": [{
        "flavour": "atmega168"
        , "fqbn": "arduino:avr:lilypad:cpu=atmega168"
    }, {
        "flavour": "atmega328"
        , "fqbn": "arduino:avr:lilypad:cpu=atmega328"
    }]
    , "default_flavour": "atmega328"
    , "fqbn": "arduino:avr:lilypad:cpu=atmega328"
    , "id": "lilypad"
    , "name": "LilyPad Arduino"
    , "package": "arduino"
    , "upload": [{
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {upload.verbose}  -patmega328p -carduino -P{serial.port} -b57600 -D \"-Uflash:w:{build.path}/{build.project_name}.hex:i\""
        , "ext": ".hex"
        , "flavour": "atmega328"
        , "options": {
            "signature": "945c13862d3bc08bd212970e6e5f9784207a3c503c0f086e6a948a7b2ddd23ab424cc1ea5ebc408a59b30cae59d2b2366fc2a89d753c951afe4245e0e8eba194874740eae41d5c504f9c33596bfb832dd628225ee20a7754d8726a51d6596a3a44f63cff38924089e131d968cdc739ef42d27078d04360ef9aedc3c359f72d201c4ebc4fab25a22d1a66c10faa27f72daca89b9069c10cd5865c6f42d8d6c14f70285dbd2ca67fb09dfb551a12f09df252a4993f0131759c632db462e3ec1a9e20f6cc564cda1e3f25324064ec6c038712713a12b4cbadea74bc67ba05404b21235adf450194746ec60fc483e315e082aa6e9698ecb2292fdfd955aab0404b15"
        }
        , "params": {
            "noverify": "-V"
            , "quiet": "-q -q"
            , "verbose": "-v"
        }
        , "tool": "avrdude"
        , "tool_version": "6.3.0-arduino8"
    }, {
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {upload.verbose}  -patmega168 -carduino -P{serial.port} -b19200 -D \"-Uflash:w:{build.path}/{build.project_name}.hex:i\""
        , "ext": ".hex"
        , "flavour": "atmega168"
        , "options": {
            "signature": "44329ed10991e0d10061f165ef7d9768327a7d83c10be3cd94ccf4a28ec577d80572a0bc785bbaea4bc3b30f865dc78fdb58ef89e35d3b8c58cd0f44f00cd157a6e273323133576a698f1506c5fad9d151372ce16ed1149aca0953da61f69285d6f859781c2314e6b1a2f315e692638680d505c6832c0e4bf825a29f2be25dae94642d027c45257dc1d07dff159c4017073c1a8b50fbfd23616d3fccb4098a981cc6110e062a6b0dae6a3f2f9e4388baacd879e3c44a64e7e7ec0d4d48bb3c24206fa2fdabbe73f6a72b1eb824b2260dfb777a656756c0b37fadc6486e4994c138cbb0405018f2c8019605bbebeb9a7d9e273711fa356715258619c708cab90e"
        }
        , "params": {
            "noverify": "-V"
            , "quiet": "-q -q"
            , "verbose": "-v"
        }
        , "tool": "avrdude"
        , "tool_version": "6.3.0-arduino8"
    }]
}, {
    "architecture": "avr"
    , "bootloader": {
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {bootloader.verbose} -p{build.mcu} -c{protocol} {program.extra_params} \"-Uflash:w:{runtime.platform.path}/bootloaders/{bootloader.file}:i\" -Ulock:w:0x0F:m"
        , "signature": "6c0de0c02e2c8feb902d672025b0feb1e7ef380f00c87d4ebe1b63bc91957de5311517cd949cef93ae4f98dfbd159b7a034d3d68889c88e6febd4952375511d2516c7d94c0a4085c6631be971187397a9989ff5d27ca9a908c6535179fd3893d83cd4771c3a2da0927042e0828f0967dbde200b20c7e52bc13b9468248ba7ce4ac29471f55a9a94627fc2f8227b454bdf7f77a6e74b959f2f959a28357f3947b6a92648c0eb875aac808317d6fc8958be6959779227d8f09f8ff813dbb4fcea5095107bd0348f8085a229d733c97164c032701cd6e5d392c8f71ac006afdaa8cd885ff68f5a2c690445f1df5a274cb5194795be35d33e1a23c4936068e62f6bc"
    }
    , "build": [{
        "flavour": "atmega2560"
        , "fqbn": "arduino:avr:mega:cpu=atmega2560"
    }, {
        "flavour": "atmega1280"
        , "fqbn": "arduino:avr:mega:cpu=atmega1280"
    }]
    , "default_flavour": "atmega2560"
    , "fqbn": "arduino:avr:mega:cpu=atmega2560"
    , "id": "mega"
    , "name": "Arduino/Genuino Mega or Mega 2560"
    , "package": "arduino"
    , "pid": ["0x2341", "0x2341", "0x2A03", "0x2341", "0x2A03", "0x2341"]
    , "upload": [{
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {upload.verbose}  -patmega2560 -cwiring -P{serial.port} -b115200 -D \"-Uflash:w:{build.path}/{build.project_name}.hex:i\""
        , "ext": ".hex"
        , "flavour": "atmega2560"
        , "options": {
            "signature": "42f016ca2ad96f5e9e1db8186ef48b63e06e81ca9d5118019f6767b224c741b967041b6aeccb2d5a8616bbaa7d2e73fa26959f27da42d3d836100b2e0b9d32e5f5ce96baaec95c9a0c412b2fb55035acaed1b0c40367fa591f64e207740ffaf92550fcc3a8d08427aa2a8fccfc23b6ccbb06b79f3eac6422a7f87e2f2168c31df13495ae5fb5e82126cd434f36fea7ad3bf0f59d183b3d64a70d851f22f0fe6aa4da2eed4f00810686cafc3e94f2396a4ff53e87166d9b5d86d7f0588030a7ec566d2add564329888fe221d4b7418e32b3b31300a66c4d60b983967c20ff1a876580b63e8a6b5e9b8b0d4c01736b947d05e98c1cb6d4b19b6915fcc80d877356"
        }
        , "params": {
            "noverify": "-V"
            , "quiet": "-q -q"
            , "verbose": "-v"
        }
        , "tool": "avrdude"
        , "tool_version": "6.3.0-arduino8"
    }, {
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {upload.verbose}  -patmega1280 -carduino -P{serial.port} -b57600 -D \"-Uflash:w:{build.path}/{build.project_name}.hex:i\""
        , "ext": ".hex"
        , "flavour": "atmega1280"
        , "options": {
            "signature": "59e6baefe318117e756901d788690b2eb6338723dc3e267ecab84b71f294ff53a797a4a8a74005af18fee2f7c1e4b6d7c9234db8ae59546fc55e044d9f296dd38034c2223459f0e71e4b83edee0d9dc2edf304b2ce78d5d136865925503e162fdf2dede1cbfb456080c76fe862ed93508641c2a35dd73c500343168d713d8b74c1641ff4b741cc68d981da9383afa5978b329a6c42ccba3210f31369aacbda5ee0b07808184f3a2872b85bcb1e43cb6f614499f3feb41656e92548bb46f2e8922baa2c0a79923228cef5a44eae2ab08bcd86f7caa56f6486efbbc81651633469856710ac8ee2754a5989f160098740cc21d0a2b22b54c17596d162d1666aa7ba"
        }
        , "params": {
            "noverify": "-V"
            , "quiet": "-q -q"
            , "verbose": "-v"
        }
        , "tool": "avrdude"
        , "tool_version": "6.3.0-arduino8"
    }]
    , "vid": ["0x2341", "0x2341", "0x2A03", "0x2341", "0x2A03", "0x2341"]
}, {
    "architecture": "samd"
    , "bootloader": {
        "commandline": ""
        , "signature": "55664ae12c257330bf47f8db4c66d0f46a0f0ff1d1c70e6f345def1f91db21044bcba010b5b7a33aaa97ee65e19baa68ccb0e198af486252ca42911d5a5660e2f6b5f5d0d76f6ec2eb9594238abb857fe5c3fc1263d1861f5e9adbe78eb108acfcd07701e7148b605031ecab5b780c210d2e409e061cfb24fc4aaada046e295ebdd986adec9d9ac1faacfbce4d55c36c0fe98e40268f3aef7708d250819a005184ae01285866712f28bbcd092da5b9d4a4f7b67d98f81856244a2e7c09b8eb54e5dff3ca60051634c3a05c6410ff3fa78bf1ba2ac0c6b36015a0eba35119211574b3d4ca8ab3dd2a144d1da50212972038359e6603c8d5ee26b4931b9f18d2aa"
    }
    , "build": [{
        "flavour": "default"
        , "fqbn": "arduino:samd:mzero_bl"
    }]
    , "default_flavour": "default"
    , "fqbn": "arduino:samd:mzero_bl"
    , "id": "mzero_bl"
    , "name": "Arduino M0"
    , "package": "arduino"
    , "pid": ["0x2a03", "0x2a03", "0x2a03", "0x2a03"]
    , "upload": [{
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {upload.verbose} -patmega2560 -cstk500v2 -P{serial.port} -b57600 \"-Uflash:w:{build.path}/{build.project_name}.hex:i\""
        , "ext": ".hex"
        , "flavour": "default"
        , "options": {
            "maximum_size": "262144"
            , "native_usb": "true"
            , "protocol": "stk500v2"
            , "signature": "83d16d41d9fda0f175d98b091f6f29af5980b187bf4ceead16d160f832021b66650521e3e7d2232be0908a7cdce6096d0a28df3ebe08471ecb7c5bd4552f555ca28e8c1c62b580b4f290f5850516e0612f00619de657dd3ffff9b11f60cd66d96656c9e40e927a3462029f403fe772554c6ea35324744be85fcef85e75e775877054722f6f09789de5173d12d6061497fedbff69f4d412808b69ef54e06d3600681a1bb90568c100e7d789d43b939a04069c694976fe05fd6e7c8e5ff5ec0e2ed6d056e8f4b34691438c2882b475f7a0b641b4b7978d06d24bb45f7176329a3711eb974f4586cb27005672d239d4cccfb799c2d41ce962419d7244aefe0a8f08"
            , "speed": "57600"
            , "use_1200bps_touch": "true"
            , "wait_for_upload_port": "true"
        }
        , "params": {
            "noverify": "-V"
            , "quiet": "-q -q"
            , "verbose": "-v -v"
        }
        , "tool": "avrdude"
        , "tool_version": "6.3.0-arduino8"
    }]
    , "vid": ["0x2a03", "0x2a03", "0x2a03", "0x2a03"]
}, {
    "architecture": "avr"
    , "bootloader": {
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {bootloader.verbose} -patmega32u4 -c{protocol} {program.extra_params} \"-Uflash:w:{runtime.platform.path}/bootloaders/caterina/Caterina-Esplora.hex:i\" -Ulock:w:0x2F:m"
        , "signature": "1f2cf0dd6069e9ba71975bad7ce256ef9b0b50bd6a88e536dbc16b2c9f38a00e2688ff62c5efbab40f18e0461d28e864b6f3b54b05853c467fe50bbf933ef35a81f2d6b516074ae009df4627e8cd71a278f8d22e9e29ab642cf9d633a243979786a5c2cc2af565f5efbab04a8802e04d2371d3e1a78ae6f2d189a2bf60d7f88854d04a4d8bfb4ab51f2252e7b3dd6c86548dba2ce6b32c9097713b50af4e1c4656b4291abaf4599dc19b284a7c8a25e8878958313fde6dacbb665ec5f71240706c7dc1fd18f47dc9997b18075eae4db9dfad79e16eb78f6d1229d72ca5077e3c5d4798d8195906aa7ce16b7239f9184a85f0f85fbb5781469c40848a15afc3f4"
    }
    , "build": [{
        "flavour": "default"
        , "fqbn": "arduino:avr:esplora"
    }]
    , "default_flavour": "default"
    , "fqbn": "arduino:avr:esplora"
    , "id": "esplora"
    , "name": "Arduino Esplora"
    , "package": "arduino"
    , "pid": ["0x2341", "0x2A03", "0x2A03", "0x2341"]
    , "upload": [{
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {upload.verbose}  -patmega32u4 -cavr109 -P{serial.port} -b57600 -D \"-Uflash:w:{build.path}/{build.project_name}.hex:i\""
        , "ext": ".hex"
        , "flavour": "default"
        , "options": {
            "disable_flushing": "true"
            , "maximum_data_size": "2560"
            , "maximum_size": "28672"
            , "protocol": "avr109"
            , "signature": "15a80bb8e911d82ee8c36d14bc5c00348f307ac8eaba5357366eeeb776a2e4eefa85a061d22ebde27482841de67e95d471700e8487adf3adda94d2b1091c68ab4d5b5098ad6f3f0e63878be52b3459a3966e82bbf0f160f13f2fcbc2ae06f296271f19bc8fef67e038b12746fc863e76df2929ee6f2f18b604825615179da99d6a62f9e6ac6ce88f4b80c1399c9e81b734c938b34cfc1147e111bafa2ccab786cc6649baa61e45f6bf8a7a41607052207f00b3fa1c10c518804d19de55af182019ee32d99405dedfd970cd0be57953b26c6b6ca3343e25a39936583cad9894e209a38c09eb8bd74d4df99812c8a939001f0242c544b43e5f853c02de949a29a8"
            , "speed": "57600"
            , "use_1200bps_touch": "true"
            , "wait_for_upload_port": "true"
        }
        , "params": {
            "noverify": "-V"
            , "quiet": "-q -q"
            , "verbose": "-v"
        }
        , "tool": "avrdude"
        , "tool_version": "6.3.0-arduino8"
    }]
    , "vid": ["0x2341", "0x2A03", "0x2A03", "0x2341"]
}, {
    "architecture": "avr"
    , "bootloader": {
        "commandline": ""
        , "signature": "55664ae12c257330bf47f8db4c66d0f46a0f0ff1d1c70e6f345def1f91db21044bcba010b5b7a33aaa97ee65e19baa68ccb0e198af486252ca42911d5a5660e2f6b5f5d0d76f6ec2eb9594238abb857fe5c3fc1263d1861f5e9adbe78eb108acfcd07701e7148b605031ecab5b780c210d2e409e061cfb24fc4aaada046e295ebdd986adec9d9ac1faacfbce4d55c36c0fe98e40268f3aef7708d250819a005184ae01285866712f28bbcd092da5b9d4a4f7b67d98f81856244a2e7c09b8eb54e5dff3ca60051634c3a05c6410ff3fa78bf1ba2ac0c6b36015a0eba35119211574b3d4ca8ab3dd2a144d1da50212972038359e6603c8d5ee26b4931b9f18d2aa"
    }
    , "build": [{
        "flavour": "default"
        , "fqbn": "atmel-avr-xminis:avr:atmega328pb_xplained_mini"
    }]
    , "default_flavour": "default"
    , "fqbn": "atmel-avr-xminis:avr:atmega328pb_xplained_mini"
    , "id": "atmega328pb_xplained_mini"
    , "name": "Atmel atmega328pb Xplained mini"
    , "package": "atmel-avr-xminis"
    , "pid": ["0x03eb"]
    , "upload": [{
        "commandline": ""
        , "ext": ""
        , "flavour": "default"
        , "options": {
            "maximum_data_size": "2048"
            , "maximum_size": "32256"
            , "protocol": "arduino"
            , "signature": "55664ae12c257330bf47f8db4c66d0f46a0f0ff1d1c70e6f345def1f91db21044bcba010b5b7a33aaa97ee65e19baa68ccb0e198af486252ca42911d5a5660e2f6b5f5d0d76f6ec2eb9594238abb857fe5c3fc1263d1861f5e9adbe78eb108acfcd07701e7148b605031ecab5b780c210d2e409e061cfb24fc4aaada046e295ebdd986adec9d9ac1faacfbce4d55c36c0fe98e40268f3aef7708d250819a005184ae01285866712f28bbcd092da5b9d4a4f7b67d98f81856244a2e7c09b8eb54e5dff3ca60051634c3a05c6410ff3fa78bf1ba2ac0c6b36015a0eba35119211574b3d4ca8ab3dd2a144d1da50212972038359e6603c8d5ee26b4931b9f18d2aa"
            , "speed": "57600"
        }
        , "tool": "arduino:avrdude"
        , "tool_version": ""
    }]
    , "vid": ["0x03eb"]
}, {
    "architecture": "i586"
    , "bootloader": {
        "commandline": ""
        , "signature": "55664ae12c257330bf47f8db4c66d0f46a0f0ff1d1c70e6f345def1f91db21044bcba010b5b7a33aaa97ee65e19baa68ccb0e198af486252ca42911d5a5660e2f6b5f5d0d76f6ec2eb9594238abb857fe5c3fc1263d1861f5e9adbe78eb108acfcd07701e7148b605031ecab5b780c210d2e409e061cfb24fc4aaada046e295ebdd986adec9d9ac1faacfbce4d55c36c0fe98e40268f3aef7708d250819a005184ae01285866712f28bbcd092da5b9d4a4f7b67d98f81856244a2e7c09b8eb54e5dff3ca60051634c3a05c6410ff3fa78bf1ba2ac0c6b36015a0eba35119211574b3d4ca8ab3dd2a144d1da50212972038359e6603c8d5ee26b4931b9f18d2aa"
    }
    , "build": [{
        "flavour": "default"
        , "fqbn": "Intel:i586:izmir_fd"
    }]
    , "default_flavour": "default"
    , "fqbn": "Intel:i586:izmir_fd"
    , "id": "izmir_fd"
    , "name": "Intel® Galileo"
    , "package": "Intel"
    , "pid": ["0x8086"]
    , "upload": [{
        "commandline": "/bin/bash --verbose --noprofile \"{runtime.tools.sketchUploader-1.6.2+1.0.path}/clupload/cluploadGalileo_osx.sh\" \"{runtime.tools.sketchUploader-1.6.2+1.0.path}/x86/bin\" {build.path}/{build.project_name}.elf {serial.port}"
        , "ext": ""
        , "flavour": "default"
        , "options": {
            "maximum_size": "10000000"
            , "native_usb": "false"
            , "protocol": "sam-ba"
            , "signature": "ac5c80a63a4e93e89615c514777030fa201e88e92ba9411f33a6aa52ad21b2bbad4ae74bbcbffc9e8293269dd51dab43564747dfc65c1e9d48fbcc9b93c3a1a8b7406050f5f706234376e0069ceda8545cd21ac5ad5bc6b9a5ff5009c988699278695db4bea04ba37f9774769187c1974dda3dbb79ba8b73355ee366655b300ab63c0130f7415b07294d710893c480b1b43e682f32610b04ea8902dab013de1bf1ad4c3efedb09c839493e8f10268ae290124177ed39f460a3d17a34d3de224b837cca2a05a4c336ec31a367871279072c6242ba80beab3bf66df905556c2162f49e51cdfde235db9afabdb94e9dd5810529538744d47770df9a20812a2e5919"
            , "use_1200bps_touch": "false"
            , "wait_for_upload_port": "false"
        }
        , "params": {
            "quiet": "-q"
            , "verbose": "-vvvvvv"
        }
        , "tool": "izmirdl"
        , "tool_version": ""
    }]
    , "vid": ["0x8086"]
}, {
    "architecture": "i686"
    , "bootloader": {
        "commandline": ""
        , "signature": "55664ae12c257330bf47f8db4c66d0f46a0f0ff1d1c70e6f345def1f91db21044bcba010b5b7a33aaa97ee65e19baa68ccb0e198af486252ca42911d5a5660e2f6b5f5d0d76f6ec2eb9594238abb857fe5c3fc1263d1861f5e9adbe78eb108acfcd07701e7148b605031ecab5b780c210d2e409e061cfb24fc4aaada046e295ebdd986adec9d9ac1faacfbce4d55c36c0fe98e40268f3aef7708d250819a005184ae01285866712f28bbcd092da5b9d4a4f7b67d98f81856244a2e7c09b8eb54e5dff3ca60051634c3a05c6410ff3fa78bf1ba2ac0c6b36015a0eba35119211574b3d4ca8ab3dd2a144d1da50212972038359e6603c8d5ee26b4931b9f18d2aa"
    }
    , "build": [{
        "flavour": "default"
        , "fqbn": "Intel:i686:izmir_ec"
    }]
    , "default_flavour": "default"
    , "fqbn": "Intel:i686:izmir_ec"
    , "id": "izmir_ec"
    , "name": "Intel® Edison"
    , "package": "Intel"
    , "pid": ["0x8087"]
    , "upload": [{
        "commandline": "/bin/bash --verbose --noprofile \"{runtime.tools.sketchUploader-1.6.2+1.0.path}/clupload/cluploadEdison_osx.sh\" \"{runtime.tools.sketchUploader-1.6.2+1.0.path}/x86/bin\" {build.path}/{build.project_name}.elf {serial.port}"
        , "ext": ""
        , "flavour": "default"
        , "options": {
            "maximum_size": "10000000"
            , "native_usb": "false"
            , "protocol": "sam-ba"
            , "signature": "2106863e40971e88b21b89bb4036e950fc629f7bf9761f89c1cdff8fa2b90e4ac43e6bdeb7be8f5ef1f326bf46a4bef7d4149d5b523ef499e44d54f2287e62f8c65bd2fcf2986a0cdfdbe5720a68a23a8a4b53cbfdfd5bb1fa65c9244adfee60533933979b8af78f37076af2dac7bb7de24e1449e3e207a6663f076ad2fae00e767b645807eb34982bd188d7f28543bac9b26d37dcf7acebab1abfac5cca93fdeba4eb0b43a3f831d7793884a970c394fd55ccefad6400429ae298ab59a18601dc8e6926afc7504a530d61a26f79b72b04d022cd88822e48d9067b803f0ccbdf361e5a29e3aaeebcd07b2e579ee7b2e77bd2ceff4fcd6ea665987089caf35a67"
            , "use_1200bps_touch": "false"
            , "wait_for_upload_port": "false"
        }
        , "params": {
            "quiet": "-q"
            , "verbose": "-vvvvvv"
        }
        , "tool": "izmirdl"
        , "tool_version": ""
    }]
    , "vid": ["0x8087"]
}, {
    "architecture": "avr"
    , "bootloader": {
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {bootloader.verbose} -patmega32u4 -c{protocol} {program.extra_params} \"-Uflash:w:{runtime.platform.path}/bootloaders/caterina/Caterina-LininoOne.hex:i\" -Ulock:w:0x2F:m"
        , "signature": "7572f8b6c61f0b7673772248460053c80ef99ea8f5c576597eca04b48469009d69a61e37f95ebe0b3d74be5de4acf311b360753230551cdd07b12c3677135424f0cf258bf74a65260e2fb04fa51c52fec3607f8c43c85629c54ff00ec9eeda657cc6c0e718d59c9125dc6c656dce97bced9b5d78274b4d734c4a6c54f195d67efaaac280e1a3920d3d374f6d2898f14191c95fefb50ceb9fcbbc4f14b0aa4ada8ac204c75b2f61194df40b22a2c44f89ec0799b09aaf5c971e986e059c7caa53fedc762bda629ee6fd79a40506051adf5191c714c3acf3799c97e0f9a06c46e35f2cc21d04707a5ed6fc7b409f1f4d5cc804d7392960adfdab513cbb596bf888"
    }
    , "build": [{
        "flavour": "default"
        , "fqbn": "arduino:avr:one"
    }]
    , "default_flavour": "default"
    , "fqbn": "arduino:avr:one"
    , "id": "one"
    , "name": "Linino One"
    , "package": "arduino"
    , "pid": ["0x2a03", "0x2a03"]
    , "upload": [{
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {upload.verbose}  -patmega32u4 -cavr109 -P{serial.port} -b57600 -D \"-Uflash:w:{build.path}/{build.project_name}.hex:i\""
        , "ext": ".hex"
        , "flavour": "default"
        , "options": {
            "disable_flushing": "true"
            , "maximum_data_size": "2560"
            , "maximum_size": "28672"
            , "protocol": "avr109"
            , "signature": "15a80bb8e911d82ee8c36d14bc5c00348f307ac8eaba5357366eeeb776a2e4eefa85a061d22ebde27482841de67e95d471700e8487adf3adda94d2b1091c68ab4d5b5098ad6f3f0e63878be52b3459a3966e82bbf0f160f13f2fcbc2ae06f296271f19bc8fef67e038b12746fc863e76df2929ee6f2f18b604825615179da99d6a62f9e6ac6ce88f4b80c1399c9e81b734c938b34cfc1147e111bafa2ccab786cc6649baa61e45f6bf8a7a41607052207f00b3fa1c10c518804d19de55af182019ee32d99405dedfd970cd0be57953b26c6b6ca3343e25a39936583cad9894e209a38c09eb8bd74d4df99812c8a939001f0242c544b43e5f853c02de949a29a8"
            , "speed": "57600"
            , "use_1200bps_touch": "true"
            , "via_ssh": "true"
            , "wait_for_upload_port": "true"
        }
        , "params": {
            "noverify": "-V"
            , "quiet": "-q -q"
            , "verbose": "-v"
        }
        , "tool": "avrdude"
        , "tool_version": "6.3.0-arduino8"
    }]
    , "vid": ["0x2a03", "0x2a03"]
}, {
    "architecture": "avr"
    , "bootloader": {
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {bootloader.verbose} -patmega32u4 -c{protocol} {program.extra_params} \"-Uflash:w:{runtime.platform.path}/bootloaders/caterina-LilyPadUSB/Caterina-LilyPadUSB.hex:i\" -Ulock:w:0x2F:m"
        , "signature": "81ab5e188fee6c0094560e1b6988677482c73c01530033ab46f0b56c7cca5bcee5758fac384d3c60878e5a5f2d9db47bc1fb0c6bf9a932c7d711f618b3048794cd7f69d8fa120252e800fa0e68f3dc2512843153bb22422d5d2403d975f587805ec4ec07eb65ab89a6909f39e60c78474b59997a0e83e9ec99a95cd4f7c260457a1c25f4b30424c53944b581e9f7f93c6ff7f52ea3a44628c57ef44e7b3bad9134c447cd8536a73b1ce6161ad4dfd299fb43354c67484a473f69b8b4d39cd468c49ef0acea106b5e94b621ef0277b6267f1b10a94152c4c780e4a90a7b60c9b80e055f4a5c240675b3126900454ac8fe06c1e1f7ea1489c3a82bfa2a866df6bb"
    }
    , "build": [{
        "flavour": "default"
        , "fqbn": "arduino:avr:LilyPadUSB"
    }]
    , "default_flavour": "default"
    , "fqbn": "arduino:avr:LilyPadUSB"
    , "id": "LilyPadUSB"
    , "name": "LilyPad Arduino USB"
    , "package": "arduino"
    , "pid": ["0x1B4F", "0x1B4F"]
    , "upload": [{
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {upload.verbose}  -patmega32u4 -cavr109 -P{serial.port} -b57600 -D \"-Uflash:w:{build.path}/{build.project_name}.hex:i\""
        , "ext": ".hex"
        , "flavour": "default"
        , "options": {
            "disable_flushing": "true"
            , "maximum_data_size": "2560"
            , "maximum_size": "28672"
            , "protocol": "avr109"
            , "signature": "15a80bb8e911d82ee8c36d14bc5c00348f307ac8eaba5357366eeeb776a2e4eefa85a061d22ebde27482841de67e95d471700e8487adf3adda94d2b1091c68ab4d5b5098ad6f3f0e63878be52b3459a3966e82bbf0f160f13f2fcbc2ae06f296271f19bc8fef67e038b12746fc863e76df2929ee6f2f18b604825615179da99d6a62f9e6ac6ce88f4b80c1399c9e81b734c938b34cfc1147e111bafa2ccab786cc6649baa61e45f6bf8a7a41607052207f00b3fa1c10c518804d19de55af182019ee32d99405dedfd970cd0be57953b26c6b6ca3343e25a39936583cad9894e209a38c09eb8bd74d4df99812c8a939001f0242c544b43e5f853c02de949a29a8"
            , "speed": "57600"
            , "use_1200bps_touch": "true"
            , "wait_for_upload_port": "true"
        }
        , "params": {
            "noverify": "-V"
            , "quiet": "-q -q"
            , "verbose": "-v"
        }
        , "tool": "avrdude"
        , "tool_version": "6.3.0-arduino8"
    }]
    , "vid": ["0x1B4F", "0x1B4F"]
}, {
    "architecture": "avr"
    , "bootloader": {
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {bootloader.verbose} -patmega32u4 -c{protocol} {program.extra_params} \"-Uflash:w:{runtime.platform.path}/bootloaders/caterina/Caterina-Yunmini.hex:i\" -Ulock:w:0x2F:m"
        , "signature": "84b6e7180e3b66937b94ae3b9c828a9590e2f22d62e71209dbec478ce5d2e354d16854945dd754bbef77643304fe714f20b98a23001c19e1343244236cadf8728e01614fc7562088a110fe603e381a43cf2e4eba2141358ccf9a3c42e61833e646ceb858dce2d12cb972fa646ac436d5c2ba7d8e76d9f805e4b4413376da6ea04489bf504e3a2d647e54a4f76a4bf4ed9cdb6a5a73cbe3f9d12a5c53e3186220b1e66d28a61f83230bb031e8e9d99c5315d8b1b39c6200ec669e1c8133eff55b54e94cace711f56ccf0b2a348dd819a6b592ca7fcb88ab9ececd6a569849abb99b4e7611367d65c2dc67315a39506c5349512b5535405c215e10dd2f7bd7326f"
    }
    , "build": [{
        "flavour": "default"
        , "fqbn": "arduino:avr:yunmini"
    }]
    , "default_flavour": "default"
    , "fqbn": "arduino:avr:yunmini"
    , "id": "yunmini"
    , "name": "Arduino Yún Mini"
    , "package": "arduino"
    , "pid": ["0x2a03", "0x2a03"]
    , "upload": [{
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {upload.verbose}  -patmega32u4 -cavr109 -P{serial.port} -b57600 -D \"-Uflash:w:{build.path}/{build.project_name}.hex:i\""
        , "ext": ".hex"
        , "flavour": "default"
        , "options": {
            "disable_flushing": "true"
            , "maximum_data_size": "2560"
            , "maximum_size": "28672"
            , "protocol": "avr109"
            , "signature": "15a80bb8e911d82ee8c36d14bc5c00348f307ac8eaba5357366eeeb776a2e4eefa85a061d22ebde27482841de67e95d471700e8487adf3adda94d2b1091c68ab4d5b5098ad6f3f0e63878be52b3459a3966e82bbf0f160f13f2fcbc2ae06f296271f19bc8fef67e038b12746fc863e76df2929ee6f2f18b604825615179da99d6a62f9e6ac6ce88f4b80c1399c9e81b734c938b34cfc1147e111bafa2ccab786cc6649baa61e45f6bf8a7a41607052207f00b3fa1c10c518804d19de55af182019ee32d99405dedfd970cd0be57953b26c6b6ca3343e25a39936583cad9894e209a38c09eb8bd74d4df99812c8a939001f0242c544b43e5f853c02de949a29a8"
            , "speed": "57600"
            , "use_1200bps_touch": "true"
            , "via_ssh": "true"
            , "wait_for_upload_port": "true"
        }
        , "params": {
            "noverify": "-V"
            , "quiet": "-q -q"
            , "verbose": "-v"
        }
        , "tool": "avrdude"
        , "tool_version": "6.3.0-arduino8"
    }]
    , "vid": ["0x2a03", "0x2a03"]
}, {
    "architecture": "avr"
    , "bootloader": {
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {bootloader.verbose} -p{build.mcu} -c{protocol} {program.extra_params} \"-Uflash:w:{runtime.platform.path}/bootloaders/{bootloader.file}:i\" -Ulock:w:0x0F:m"
        , "signature": "6c0de0c02e2c8feb902d672025b0feb1e7ef380f00c87d4ebe1b63bc91957de5311517cd949cef93ae4f98dfbd159b7a034d3d68889c88e6febd4952375511d2516c7d94c0a4085c6631be971187397a9989ff5d27ca9a908c6535179fd3893d83cd4771c3a2da0927042e0828f0967dbde200b20c7e52bc13b9468248ba7ce4ac29471f55a9a94627fc2f8227b454bdf7f77a6e74b959f2f959a28357f3947b6a92648c0eb875aac808317d6fc8958be6959779227d8f09f8ff813dbb4fcea5095107bd0348f8085a229d733c97164c032701cd6e5d392c8f71ac006afdaa8cd885ff68f5a2c690445f1df5a274cb5194795be35d33e1a23c4936068e62f6bc"
    }
    , "build": [{
        "flavour": "atmega168"
        , "fqbn": "arduino:avr:bt:cpu=atmega168"
    }, {
        "flavour": "atmega328"
        , "fqbn": "arduino:avr:bt:cpu=atmega328"
    }]
    , "default_flavour": "atmega328"
    , "fqbn": "arduino:avr:bt:cpu=atmega328"
    , "id": "bt"
    , "name": "Arduino BT"
    , "package": "arduino"
    , "upload": [{
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {upload.verbose}  -patmega168 -carduino -P{serial.port} -b19200 -D \"-Uflash:w:{build.path}/{build.project_name}.hex:i\""
        , "ext": ".hex"
        , "flavour": "atmega168"
        , "options": {
            "signature": "44329ed10991e0d10061f165ef7d9768327a7d83c10be3cd94ccf4a28ec577d80572a0bc785bbaea4bc3b30f865dc78fdb58ef89e35d3b8c58cd0f44f00cd157a6e273323133576a698f1506c5fad9d151372ce16ed1149aca0953da61f69285d6f859781c2314e6b1a2f315e692638680d505c6832c0e4bf825a29f2be25dae94642d027c45257dc1d07dff159c4017073c1a8b50fbfd23616d3fccb4098a981cc6110e062a6b0dae6a3f2f9e4388baacd879e3c44a64e7e7ec0d4d48bb3c24206fa2fdabbe73f6a72b1eb824b2260dfb777a656756c0b37fadc6486e4994c138cbb0405018f2c8019605bbebeb9a7d9e273711fa356715258619c708cab90e"
        }
        , "params": {
            "noverify": "-V"
            , "quiet": "-q -q"
            , "verbose": "-v"
        }
        , "tool": "avrdude"
        , "tool_version": "6.3.0-arduino8"
    }, {
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {upload.verbose}  -patmega328p -carduino -P{serial.port} -b19200 -D \"-Uflash:w:{build.path}/{build.project_name}.hex:i\""
        , "ext": ".hex"
        , "flavour": "atmega328"
        , "options": {
            "signature": "9a0ce514a8d645c025c103fe94a5cc36d271fba4c809083c89fb9effff22b8e7a20792f18399d1b2944a675ad71aecc7ea8de767d54ee835ca5ba6ef2424d9724325dd75a601cca09ae84208a02f948b87166ac509f270061941a8836b58ad409bdbf4ddf9397fe83415f46e92065919736759184843deac3336206e3ba08cdcf216ff0acaeaa9db0c6f466f387a375688a5668664ffcf1c1ceee63560f47f014e66dcb0d12718e2d077e93ee2cc8c65228327a79fd28dd7c6401c81ec20634de6651eacac9988400e8c9973c63064304468fb1067bfbf04c1e00b26467a816b4345e25739d49f3d4e42831914f3652442d93fc14afee00342884ec0ec7cd37e"
        }
        , "params": {
            "noverify": "-V"
            , "quiet": "-q -q"
            , "verbose": "-v"
        }
        , "tool": "avrdude"
        , "tool_version": "6.3.0-arduino8"
    }]
}, {
    "architecture": "avr"
    , "bootloader": {
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {bootloader.verbose} -patmega32u4 -c{protocol} {program.extra_params} \"-Uflash:w:{runtime.platform.path}/bootloaders/caterina/Caterina-Industrial101.hex:i\" -Ulock:w:0x2F:m"
        , "signature": "af472f1b4085448465a852745cc9fae06243bbc31d0e64dd53e61799416a1b396c1a2e46906e468788ffa63b0a3e594c5ada1835c54da00cdfc40a55fec777c9a99b2311b82a17c980ee5f85c0af56a5af5cf587b97f40cdcd9e620e7a593ce1eb2ad4b060522fad75b1027801f3014178f6c4e58932edbfbcd3bde9a38f43aee7d6f8e641095b239a7345c851a28b9ee124d2074bfa8382575c021de6cfc5ee35ac1c58658993b280fe0cfbb369e06fb046bc7553dd5ca77b44533568b3f10a20d153839d68ac3b26ee1253f6015ce5ec90dc2e2f833f6e0ad9e9648558e81577a22d14a0eec5b82f85b12b171539ddb05df91760a026c3e0f4a8ece6318cb7"
    }
    , "build": [{
        "flavour": "default"
        , "fqbn": "arduino:avr:chiwawa"
    }]
    , "default_flavour": "default"
    , "fqbn": "arduino:avr:chiwawa"
    , "id": "chiwawa"
    , "name": "Arduino Industrial 101"
    , "package": "arduino"
    , "pid": ["0x2a03", "0x2a03"]
    , "upload": [{
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {upload.verbose}  -patmega32u4 -cavr109 -P{serial.port} -b57600 -D \"-Uflash:w:{build.path}/{build.project_name}.hex:i\""
        , "ext": ".hex"
        , "flavour": "default"
        , "options": {
            "disable_flushing": "true"
            , "maximum_data_size": "2560"
            , "maximum_size": "28672"
            , "protocol": "avr109"
            , "signature": "15a80bb8e911d82ee8c36d14bc5c00348f307ac8eaba5357366eeeb776a2e4eefa85a061d22ebde27482841de67e95d471700e8487adf3adda94d2b1091c68ab4d5b5098ad6f3f0e63878be52b3459a3966e82bbf0f160f13f2fcbc2ae06f296271f19bc8fef67e038b12746fc863e76df2929ee6f2f18b604825615179da99d6a62f9e6ac6ce88f4b80c1399c9e81b734c938b34cfc1147e111bafa2ccab786cc6649baa61e45f6bf8a7a41607052207f00b3fa1c10c518804d19de55af182019ee32d99405dedfd970cd0be57953b26c6b6ca3343e25a39936583cad9894e209a38c09eb8bd74d4df99812c8a939001f0242c544b43e5f853c02de949a29a8"
            , "speed": "57600"
            , "use_1200bps_touch": "true"
            , "via_ssh": "true"
            , "wait_for_upload_port": "true"
        }
        , "params": {
            "noverify": "-V"
            , "quiet": "-q -q"
            , "verbose": "-v"
        }
        , "tool": "avrdude"
        , "tool_version": "6.3.0-arduino8"
    }]
    , "vid": ["0x2a03", "0x2a03"]
}, {
    "architecture": "avr"
    , "bootloader": {
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {bootloader.verbose} -patmega2560 -c{protocol} {program.extra_params} \"-Uflash:w:{runtime.platform.path}/bootloaders/stk500v2/stk500boot_v2_mega2560.hex:i\" -Ulock:w:0x0F:m"
        , "signature": "a56e8e0edb8b330f193d8f9e31959b5614b9ba813e9ea95ca84c7a153e8d7e62edb6f64e0ffef92254963d89bd31fdaecfb169d74e623051a8258e6301b8b89c2ae2d79a6613babb3bb45153e1f76b81ccf50205b62b835c9afc49638c99a294f0ace26bab701f8a3c760b263d6fe49d8fc661fd333871cc428f5ae93f659e1c57af0d70252d75e0526fbd74a5760955fc5da6644985bec7540e4fc4c96edbf0357529165639ab9029fbe2ac41505801d2fd54a3dae58e8f788ef1c11fa4224f6457eb34dc7cba5723cfc60e26952fdf36f3f50d8e078eb7c625776e158f0a1663df8dbc70de2abc3adef7f6f936fd4b17b29cd804e08445e069aabe03b73ef4"
    }
    , "build": [{
        "flavour": "default"
        , "fqbn": "arduino:avr:megaADK"
    }]
    , "default_flavour": "default"
    , "fqbn": "arduino:avr:megaADK"
    , "id": "megaADK"
    , "name": "Arduino Mega ADK"
    , "package": "arduino"
    , "pid": ["0x2341", "0x2341", "0x2A03", "0x2A03"]
    , "upload": [{
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {upload.verbose}  -patmega2560 -cwiring -P{serial.port} -b115200 -D \"-Uflash:w:{build.path}/{build.project_name}.hex:i\""
        , "ext": ".hex"
        , "flavour": "default"
        , "options": {
            "maximum_data_size": "8192"
            , "maximum_size": "253952"
            , "protocol": "wiring"
            , "signature": "42f016ca2ad96f5e9e1db8186ef48b63e06e81ca9d5118019f6767b224c741b967041b6aeccb2d5a8616bbaa7d2e73fa26959f27da42d3d836100b2e0b9d32e5f5ce96baaec95c9a0c412b2fb55035acaed1b0c40367fa591f64e207740ffaf92550fcc3a8d08427aa2a8fccfc23b6ccbb06b79f3eac6422a7f87e2f2168c31df13495ae5fb5e82126cd434f36fea7ad3bf0f59d183b3d64a70d851f22f0fe6aa4da2eed4f00810686cafc3e94f2396a4ff53e87166d9b5d86d7f0588030a7ec566d2add564329888fe221d4b7418e32b3b31300a66c4d60b983967c20ff1a876580b63e8a6b5e9b8b0d4c01736b947d05e98c1cb6d4b19b6915fcc80d877356"
            , "speed": "115200"
        }
        , "params": {
            "noverify": "-V"
            , "quiet": "-q -q"
            , "verbose": "-v"
        }
        , "tool": "avrdude"
        , "tool_version": "6.3.0-arduino8"
    }]
    , "vid": ["0x2341", "0x2341", "0x2A03", "0x2A03"]
}, {
    "architecture": "avr"
    , "bootloader": {
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {bootloader.verbose} -patmega32u4 -c{protocol} {program.extra_params} \"-Uflash:w:{runtime.platform.path}/bootloaders/caterina/Caterina-LeonardoEthernet.hex:i\" -Ulock:w:0x2F:m"
        , "signature": "6667cf4ee377790713bd34706db1d13f6523e1ae3878e593bf17a6ca6a111034e62e863655ab4df07554a07edb7d9e3f46db8b6e0b6086316761d6cb3347ca2d3ccf61dfbfe77db34888e200589ffda11bc11d88493a721ab573eaf08a373dbf41d72c9a60f8a48cfcae2a09d924a3d70772fcea242675afa047908ecee60a1eca10fb56515d5304df907c41d8314705b364d5caefbefa608e0556a1d8b0b71ed5c75a34868bc2c7a2c712cb6be378cd13f6c0030662f8845dcbf15df266204f81194418adbc95ffcacb237ffd24ece1300ba4f1b3e8bd377a4f9d3d39593214c48a242a9a8fa26001e81f8c5db8891d88b7d9c0e9afb547ca11a1fbf8e0274f"
    }
    , "build": [{
        "flavour": "default"
        , "fqbn": "arduino:avr:leonardoeth"
    }]
    , "default_flavour": "default"
    , "fqbn": "arduino:avr:leonardoeth"
    , "id": "leonardoeth"
    , "name": "Arduino Leonardo ETH"
    , "package": "arduino"
    , "pid": ["0x2a03", "0x2a03"]
    , "upload": [{
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {upload.verbose}  -patmega32u4 -cavr109 -P{serial.port} -b57600 -D \"-Uflash:w:{build.path}/{build.project_name}.hex:i\""
        , "ext": ".hex"
        , "flavour": "default"
        , "options": {
            "disable_flushing": "true"
            , "maximum_data_size": "2560"
            , "maximum_size": "28672"
            , "protocol": "avr109"
            , "signature": "15a80bb8e911d82ee8c36d14bc5c00348f307ac8eaba5357366eeeb776a2e4eefa85a061d22ebde27482841de67e95d471700e8487adf3adda94d2b1091c68ab4d5b5098ad6f3f0e63878be52b3459a3966e82bbf0f160f13f2fcbc2ae06f296271f19bc8fef67e038b12746fc863e76df2929ee6f2f18b604825615179da99d6a62f9e6ac6ce88f4b80c1399c9e81b734c938b34cfc1147e111bafa2ccab786cc6649baa61e45f6bf8a7a41607052207f00b3fa1c10c518804d19de55af182019ee32d99405dedfd970cd0be57953b26c6b6ca3343e25a39936583cad9894e209a38c09eb8bd74d4df99812c8a939001f0242c544b43e5f853c02de949a29a8"
            , "speed": "57600"
            , "use_1200bps_touch": "true"
            , "wait_for_upload_port": "true"
        }
        , "params": {
            "noverify": "-V"
            , "quiet": "-q -q"
            , "verbose": "-v"
        }
        , "tool": "avrdude"
        , "tool_version": "6.3.0-arduino8"
    }]
    , "vid": ["0x2a03", "0x2a03"]
}, {
    "architecture": "samd"
    , "bootloader": {
        "commandline": "\"{runtime.tools.openocd-0.9.0-arduino.path}/bin/openocd\" {bootloader.verbose} -s \"{runtime.tools.openocd-0.9.0-arduino.path}/share/openocd/scripts/\" -f \"{runtime.platform.path}/variants/arduino_zero/openocd_scripts/arduino_zero.cfg\" -c \"telnet_port disabled; init; halt; at91samd bootloader 0; program {{{runtime.platform.path}/bootloaders/zero/samd21_sam_ba.bin}} verify reset; shutdown\""
        , "signature": "4539102362a2df365a6b518339672426792f8bcc1b0f4cc374d4fa363528405601f280bca6f22921f7193f1ddd0e139c3b33b827254b0a14d9fd68d333d4c2df93893308af4ce868256bec1750eb8a262c0f888d401a1fa435a4c32f5ef750b1464915c74fedcc18cae3afb14c7277d8429a1f3fb38c9f1a7809ea7e770e21f9dc525ea0ca9ed2b6f52b1cfc4f85f5f17b73849f4913c0a1caa14aeb1d51a30a13c93eda0c9e02e5a5aba3f09dde5e61e9fefa2425ee67cb5c6211f2894680ce370c94c91ce784c915a97a377114776098a9bee51d625796d5706e244eb490dacafc72f1b4ba467f59166a43639e9a17527110c13f24d8d5208eadbdb736c907"
    }
    , "build": [{
        "flavour": "default"
        , "fqbn": "arduino:samd:arduino_zero_native"
    }]
    , "default_flavour": "default"
    , "fqbn": "arduino:samd:arduino_zero_native"
    , "id": "arduino_zero_native"
    , "name": "Arduino/Genuino Zero (Native USB Port)"
    , "package": "arduino"
    , "pid": ["0x2341", "0x2341", "0x2341", "0x2341"]
    , "upload": [{
        "commandline": "\"{runtime.tools.bossac-1.7.0.path}/bossac\" {upload.verbose} --port={serial.port.file} -U true -i -e -w -v \"{build.path}/{build.project_name}.bin\" -R"
        , "ext": ".bin"
        , "flavour": "default"
        , "options": {
            "maximum_size": "262144"
            , "native_usb": "true"
            , "protocol": "sam-ba"
            , "signature": "66695789d14908f52cb1964da58ec9fa816d6ddb321900c60ad6ec2d84a7c713abb2b71404030c043e32cf548736eb706180da8256f2533bd132430896437c72b396abe19e632446f16e43b80b73f5cf40aec946d00e7543721cc72d77482a84d2d510e46ea6ee0aaf063ec267b5046a1ace36b7eb04c64b4140302586f1e10eda8452078498ab5c9985e8f5d521786064601daa5ba2978cf91cfeb64e83057b3475ec029a1b835460f4e203c1635eaba812b076248a3589cd5d84c52398f09d255f8aae25d66a40d5ab2b1700247defbdfd044c77d44078197d1f543800e11f79d6ef1c6eb46df65fe2fffd81716b11d798ba21a3ca2cb20f6d955d8e1f8aef"
            , "use_1200bps_touch": "true"
            , "wait_for_upload_port": "true"
        }
        , "params": {
            "quiet": ""
            , "verbose": "-i -d"
        }
        , "tool": "bossac"
        , "tool_version": "1.7.0"
    }]
    , "vid": ["0x2341", "0x2341", "0x2341", "0x2341"]
}, {
    "architecture": "avr"
    , "bootloader": {
        "commandline": ""
        , "signature": "55664ae12c257330bf47f8db4c66d0f46a0f0ff1d1c70e6f345def1f91db21044bcba010b5b7a33aaa97ee65e19baa68ccb0e198af486252ca42911d5a5660e2f6b5f5d0d76f6ec2eb9594238abb857fe5c3fc1263d1861f5e9adbe78eb108acfcd07701e7148b605031ecab5b780c210d2e409e061cfb24fc4aaada046e295ebdd986adec9d9ac1faacfbce4d55c36c0fe98e40268f3aef7708d250819a005184ae01285866712f28bbcd092da5b9d4a4f7b67d98f81856244a2e7c09b8eb54e5dff3ca60051634c3a05c6410ff3fa78bf1ba2ac0c6b36015a0eba35119211574b3d4ca8ab3dd2a144d1da50212972038359e6603c8d5ee26b4931b9f18d2aa"
    }
    , "build": [{
        "flavour": "default"
        , "fqbn": "atmel-avr-xminis:avr:atmega328p_xplained_mini"
    }]
    , "default_flavour": "default"
    , "fqbn": "atmel-avr-xminis:avr:atmega328p_xplained_mini"
    , "id": "atmega328p_xplained_mini"
    , "name": "Atmel atmega328p Xplained mini"
    , "package": "atmel-avr-xminis"
    , "pid": ["0x03eb"]
    , "upload": [{
        "commandline": ""
        , "ext": ""
        , "flavour": "default"
        , "options": {
            "maximum_data_size": "2048"
            , "maximum_size": "32256"
            , "protocol": "arduino"
            , "signature": "55664ae12c257330bf47f8db4c66d0f46a0f0ff1d1c70e6f345def1f91db21044bcba010b5b7a33aaa97ee65e19baa68ccb0e198af486252ca42911d5a5660e2f6b5f5d0d76f6ec2eb9594238abb857fe5c3fc1263d1861f5e9adbe78eb108acfcd07701e7148b605031ecab5b780c210d2e409e061cfb24fc4aaada046e295ebdd986adec9d9ac1faacfbce4d55c36c0fe98e40268f3aef7708d250819a005184ae01285866712f28bbcd092da5b9d4a4f7b67d98f81856244a2e7c09b8eb54e5dff3ca60051634c3a05c6410ff3fa78bf1ba2ac0c6b36015a0eba35119211574b3d4ca8ab3dd2a144d1da50212972038359e6603c8d5ee26b4931b9f18d2aa"
            , "speed": "57600"
        }
        , "tool": "arduino:avrdude"
        , "tool_version": ""
    }]
    , "vid": ["0x03eb"]
}, {
    "architecture": "sam"
    , "bootloader": {
        "commandline": ""
        , "signature": "55664ae12c257330bf47f8db4c66d0f46a0f0ff1d1c70e6f345def1f91db21044bcba010b5b7a33aaa97ee65e19baa68ccb0e198af486252ca42911d5a5660e2f6b5f5d0d76f6ec2eb9594238abb857fe5c3fc1263d1861f5e9adbe78eb108acfcd07701e7148b605031ecab5b780c210d2e409e061cfb24fc4aaada046e295ebdd986adec9d9ac1faacfbce4d55c36c0fe98e40268f3aef7708d250819a005184ae01285866712f28bbcd092da5b9d4a4f7b67d98f81856244a2e7c09b8eb54e5dff3ca60051634c3a05c6410ff3fa78bf1ba2ac0c6b36015a0eba35119211574b3d4ca8ab3dd2a144d1da50212972038359e6603c8d5ee26b4931b9f18d2aa"
    }
    , "build": [{
        "flavour": "default"
        , "fqbn": "arduino:sam:arduino_due_x_dbg"
    }]
    , "default_flavour": "default"
    , "fqbn": "arduino:sam:arduino_due_x_dbg"
    , "id": "arduino_due_x_dbg"
    , "name": "Arduino Due (Programming Port)"
    , "package": "arduino"
    , "pid": ["0x2A03", "0x2341"]
    , "upload": [{
        "commandline": "\"{runtime.tools.bossac.path}/bossac\" {upload.verbose} --port={serial.port.file} -U false -e -w {upload.verify} -b \"{build.path}/{build.project_name}.bin\" -R"
        , "ext": ".bin"
        , "flavour": "default"
        , "options": {
            "maximum_size": "524288"
            , "native_usb": "false"
            , "protocol": "sam-ba"
            , "signature": "4a8bb0a66323d62b8f7dc19f2cf391e51fcb218e5953daa45fb3fb5f097d233bc01169b5278138ce93dd106dca189b840047a1781f5f66bb25f80a464f1acda6e98b30d95d576efb171005cc9812b057346d2d3d886de918391b1eeac53cf063af2c47fdbf506e2e9d78657b37d0f83dc32187ca5ac4248d1cbd5c86b7e5035bef74dae0eb44a40356902276ee9ce5a3e2cce77a3aab02199e125062c7470536ed4535d442b63982385fe9e7ed5df286fa5df8650e388b3591b2e69b34e2a1bb3a0142256cfe31ed5bbda51695f21758ad28addb083a0a2addcbaff742bde4284d96d62c52ac765b6a8deca6027a6709aad43475b0ba2e677f5db42b79449c13"
            , "use_1200bps_touch": "true"
            , "wait_for_upload_port": "false"
        }
        , "params": {
            "quiet": ""
            , "verbose": "-i -d"
            , "verify": "-v"
        }
        , "tool": "bossac"
        , "tool_version": "1.6.1-arduino"
    }]
    , "vid": ["0x2A03", "0x2341"]
}, {
    "architecture": "avr"
    , "bootloader": {
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {bootloader.verbose} -patmegang -c{protocol} {program.extra_params} \"-Uflash:w:{runtime.platform.path}/bootloaders/{bootloader.file}:i\" -Ulock:w:0x0F:m"
        , "signature": "6bc8abb6a3dbaa66dd0ffabb3f29eab16ac507cc11fe91dd5f31e630721fa7a7ad991ad8dc2121ee912a6a433301cac556916a22d6be300544d69372163a0a3686f2347752da473873428884a218c873c613b24f8010599ee2369b8125597ce393c07e09dc2334c75481e6275b427e9a58cfa0672ca3072cc98d2e386b0750e854ed798e09f772012d810a515cd1850943aad3cdc2edaad6250a9f8b265dad97381515fdf6d0722bd0305d0c86eb7944beeb334727fde41d0f933faf239ff345eb75b9af609558a528651520fb2366bf93e7947510d3de6f839024e3cef7e737f7b481dad6d75adb447fdd8cb0f63a2de972e9dbfb97ea5c06b8204d15e41171"
    }
    , "build": [{
        "flavour": "atmega8"
        , "fqbn": "arduino:avr:atmegang:cpu=atmega8"
    }, {
        "flavour": "atmega168"
        , "fqbn": "arduino:avr:atmegang:cpu=atmega168"
    }]
    , "default_flavour": "atmega168"
    , "fqbn": "arduino:avr:atmegang:cpu=atmega168"
    , "id": "atmegang"
    , "name": "Arduino NG or older"
    , "package": "arduino"
    , "upload": [{
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {upload.verbose}  -patmegang -carduino -P{serial.port} -b19200 -D \"-Uflash:w:{build.path}/{build.project_name}.hex:i\""
        , "ext": ".hex"
        , "flavour": "atmega168"
        , "options": {
            "signature": "8f1469ec8fdaf016bf0aba93106e5e94549303cace53f99f5946d0032dde3e0ec8539764ec86a282237acac6c5d3aa91cacc290fac8f102f7005a06048f7f72861ce16aabf629e13320a708f3ac691b3df397fe15dbdf5df93fe28b9af6738ef4994ad13fec6291016a0e4988a277e0c2650f5e199a3d6d95a8820f7909a1389d1eca44641c54deab25880a88da2f1d061b421eb55f9a715d786c9ca53b6251d4b454d87e5f68bd45511c7b6fd5351b6ab7e3c4b3acc70baa31950eed09e0cb0d8b07235fae97a2c2fb0132767baa7c50b09aaa63feac6ded79c10db23205c6888d20478d864beaa891b2cd7c3a38210259f4373bcead5341e0d74a104b3708a"
        }
        , "params": {
            "noverify": "-V"
            , "quiet": "-q -q"
            , "verbose": "-v"
        }
        , "tool": "avrdude"
        , "tool_version": "6.3.0-arduino8"
    }, {
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {upload.verbose}  -patmegang -carduino -P{serial.port} -b19200 -D \"-Uflash:w:{build.path}/{build.project_name}.hex:i\""
        , "ext": ".hex"
        , "flavour": "atmega8"
        , "options": {
            "signature": "8f1469ec8fdaf016bf0aba93106e5e94549303cace53f99f5946d0032dde3e0ec8539764ec86a282237acac6c5d3aa91cacc290fac8f102f7005a06048f7f72861ce16aabf629e13320a708f3ac691b3df397fe15dbdf5df93fe28b9af6738ef4994ad13fec6291016a0e4988a277e0c2650f5e199a3d6d95a8820f7909a1389d1eca44641c54deab25880a88da2f1d061b421eb55f9a715d786c9ca53b6251d4b454d87e5f68bd45511c7b6fd5351b6ab7e3c4b3acc70baa31950eed09e0cb0d8b07235fae97a2c2fb0132767baa7c50b09aaa63feac6ded79c10db23205c6888d20478d864beaa891b2cd7c3a38210259f4373bcead5341e0d74a104b3708a"
        }
        , "params": {
            "noverify": "-V"
            , "quiet": "-q -q"
            , "verbose": "-v"
        }
        , "tool": "avrdude"
        , "tool_version": "6.3.0-arduino8"
    }]
}, {
    "architecture": "sam"
    , "bootloader": {
        "commandline": ""
        , "signature": "55664ae12c257330bf47f8db4c66d0f46a0f0ff1d1c70e6f345def1f91db21044bcba010b5b7a33aaa97ee65e19baa68ccb0e198af486252ca42911d5a5660e2f6b5f5d0d76f6ec2eb9594238abb857fe5c3fc1263d1861f5e9adbe78eb108acfcd07701e7148b605031ecab5b780c210d2e409e061cfb24fc4aaada046e295ebdd986adec9d9ac1faacfbce4d55c36c0fe98e40268f3aef7708d250819a005184ae01285866712f28bbcd092da5b9d4a4f7b67d98f81856244a2e7c09b8eb54e5dff3ca60051634c3a05c6410ff3fa78bf1ba2ac0c6b36015a0eba35119211574b3d4ca8ab3dd2a144d1da50212972038359e6603c8d5ee26b4931b9f18d2aa"
    }
    , "build": [{
        "flavour": "default"
        , "fqbn": "arduino:sam:arduino_due_x"
    }]
    , "default_flavour": "default"
    , "fqbn": "arduino:sam:arduino_due_x"
    , "id": "arduino_due_x"
    , "name": "Arduino Due (Native USB Port)"
    , "package": "arduino"
    , "pid": ["0x2341", "0x2A03"]
    , "upload": [{
        "commandline": "\"{runtime.tools.bossac.path}/bossac\" {upload.verbose} --port={serial.port.file} -U true -e -w {upload.verify} -b \"{build.path}/{build.project_name}.bin\" -R"
        , "ext": ".bin"
        , "flavour": "default"
        , "options": {
            "maximum_size": "524288"
            , "native_usb": "true"
            , "protocol": "sam-ba"
            , "signature": "b38ce34a9d422b69f2bf0cbbdf899547b9a6b8816266f0a2f5a8b4a1589e7bbf206d3f3c7c6cee12db972aa0cc2b59a3a52e482b8e0a99f024ce2e5ce76344f864a5b143d22ac99f04ec1095878955fc9793e08146287a45aded3c8bc07650b6a45cfe064236e4c1e012ca8d50153ad55ac16eb60b148f7f6280348b258de2c08f27831cea4baa098cbaecc345fdb6843a6af7a90ce1d0695db27b8ee40e3057be84a9db5f9fc8d59e4625696bc24b92841c712eb81ee23df0233a1728e530efa38e292ef90d4f264925f75b0570201eea25490227926cbfbebe860c1ea172e543eef1ec46f7740c58f5f88233b38859fc66a212abd87056edaefa2c1427fdcc"
            , "use_1200bps_touch": "true"
            , "wait_for_upload_port": "true"
        }
        , "params": {
            "quiet": ""
            , "verbose": "-i -d"
            , "verify": "-v"
        }
        , "tool": "bossac"
        , "tool_version": "1.6.1-arduino"
    }]
    , "vid": ["0x2341", "0x2A03"]
}, {
    "architecture": "avr"
    , "bootloader": {
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {bootloader.verbose} -patmega328p -c{protocol} {program.extra_params} \"-Uflash:w:{runtime.platform.path}/bootloaders/atmega/ATmegaBOOT_168_atmega328_pro_8MHz.hex:i\" -Ulock:w:0x0F:m"
        , "signature": "a561fb83e42d9a571ffc4ab5a1bdae9d45859b38b3704cc0855f73c2ba6aef5224db503f58a5a1feb37b3afa6a1a1d8dcfd84f43b5e542f54d04d66e9db0ee1c91b7fcbeccd69704d193eaa7b5187ac1b0e4cdd5e740a5d198ccd0a862d648f861fb371ff4f97838f6b3405f1559cf41ee56d28aa938b0763ea76082e7efcf5e59b8fc2225e050774293ae6199908a46b7f2152fcf2e1e46c3809b70f4f44e9a89accf4d2c193829c5ec8578bac7be8196dc3401fa7c7a3995018c3f93856f9f1006ad7010162ea98e958e63c5b8b98f55e5becb87292d9fa38a913599496d4f48249010d53516c83f5f93617e37f2a1b186eb07a26ef0e73daf591df9871c27"
    }
    , "build": [{
        "flavour": "default"
        , "fqbn": "arduino:avr:fio"
    }]
    , "default_flavour": "default"
    , "fqbn": "arduino:avr:fio"
    , "id": "fio"
    , "name": "Arduino Fio"
    , "package": "arduino"
    , "upload": [{
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {upload.verbose}  -patmega328p -carduino -P{serial.port} -b57600 -D \"-Uflash:w:{build.path}/{build.project_name}.hex:i\""
        , "ext": ".hex"
        , "flavour": "default"
        , "options": {
            "maximum_data_size": "2048"
            , "maximum_size": "30720"
            , "protocol": "arduino"
            , "signature": "945c13862d3bc08bd212970e6e5f9784207a3c503c0f086e6a948a7b2ddd23ab424cc1ea5ebc408a59b30cae59d2b2366fc2a89d753c951afe4245e0e8eba194874740eae41d5c504f9c33596bfb832dd628225ee20a7754d8726a51d6596a3a44f63cff38924089e131d968cdc739ef42d27078d04360ef9aedc3c359f72d201c4ebc4fab25a22d1a66c10faa27f72daca89b9069c10cd5865c6f42d8d6c14f70285dbd2ca67fb09dfb551a12f09df252a4993f0131759c632db462e3ec1a9e20f6cc564cda1e3f25324064ec6c038712713a12b4cbadea74bc67ba05404b21235adf450194746ec60fc483e315e082aa6e9698ecb2292fdfd955aab0404b15"
            , "speed": "57600"
        }
        , "params": {
            "noverify": "-V"
            , "quiet": "-q -q"
            , "verbose": "-v"
        }
        , "tool": "avrdude"
        , "tool_version": "6.3.0-arduino8"
    }]
}, {
    "architecture": "avr"
    , "bootloader": {
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {bootloader.verbose} -patmega328p -c{protocol} {program.extra_params} \"-Uflash:w:{runtime.platform.path}/bootloaders/optiboot/optiboot_atmega328.hex:i\" -Ulock:w:0x0F:m"
        , "signature": "16415a473927904c2929ebdce541db9bc9ec810b500c25832735deb2ce230a37bc42ddc35374c8ed40683ab8c8f19396cf23e31fa194072d70f574ecac9716f48fd7b37f18f80d7ae02f31e193ae4f4a2f44091c18fdaf25ca757ae3d7af07edc4d7065072e56da56410a50acfa4db4cb15e7f0345e1f889582c0cd05d0b83f89502142a33665efd404a3e94a8f6360ed81efdff9aad2a8e95ba04e52600cc90391ed0c89e3528ada65a39f81f2b19fd0d30d39375d1be327e781092f595c319c0e6a490283b86ea90ddb98c30527028f1d1069d50852a0e6838a4d2c43991b197d0ee5c2d24a32fd598a23281df281781ca3bda1310a82ba4fc829c37fff6fa"
    }
    , "build": [{
        "flavour": "default"
        , "fqbn": "arduino:avr:ethernet"
    }]
    , "default_flavour": "default"
    , "fqbn": "arduino:avr:ethernet"
    , "id": "ethernet"
    , "name": "Arduino Ethernet"
    , "package": "arduino"
    , "upload": [{
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {upload.verbose}  -patmega328p -carduino -P{serial.port} -b115200 -D \"-Uflash:w:{build.path}/{build.project_name}.hex:i\""
        , "ext": ".hex"
        , "flavour": "default"
        , "options": {
            "maximum_data_size": "2048"
            , "maximum_size": "32256"
            , "protocol": "arduino"
            , "signature": "818f95e84bd149f2ad3cf82d383ca674b342f994921b34087afc6acc10b60370252fdf138a1f8e20666be623e13fdf976e4db145ded20cac7d324ae3f398093e8644f4f575bf65d988db0e9e4bd832756d54bc07b6478100c615ae49272f4b1eece680850fd8c63d772883783f4ea8e122a8e189e253c90978a6417cf4217e7c88d06fd2e470ffbad316537669b6db9b7de9709934aab3f12de5c3a2a8df30a91a84acf66487ed80cc286a50a598f855f4df4296eba07e49f054e0fec0d32b0928a68e6634cf656f41a3c663fbdf4e48b253dcfa02cc2d0826c216e4c2e979f5b43b1a2f171f75ea0fecf61b094a1896a8494eceda7899a4a02ca75d1f40790b"
            , "speed": "115200"
        }
        , "params": {
            "noverify": "-V"
            , "quiet": "-q -q"
            , "verbose": "-v"
        }
        , "tool": "avrdude"
        , "tool_version": "6.3.0-arduino8"
    }]
}, {
    "architecture": "samd"
    , "bootloader": {
        "commandline": "\"{runtime.tools.openocd-0.9.0-arduino.path}/bin/openocd\" {bootloader.verbose} -s \"{runtime.tools.openocd-0.9.0-arduino.path}/share/openocd/scripts/\" -f \"{runtime.platform.path}/variants/mkr1000/openocd_scripts/arduino_zero.cfg\" -c \"telnet_port disabled; init; halt; at91samd bootloader 0; program {{{runtime.platform.path}/bootloaders/mkr1000/samd21_sam_ba_arduino_mkr1000.bin}} verify reset; shutdown\""
        , "signature": "389dcb616d1c9dd495f1132ca3faa71930937a14e831a7c9ec17bf39fe46278c32028655419a60ad4fa552cf2ea756eaae29d3589c83e2bb8a47c61e06c668d944840fe442e04796113d79a0f4871eb7cbe05a38b888e580499f12b02fdcb5c94cbdad1aacfae167c8fd951aa14bb94c4b5ffdab905f1f4818c7880fc75e29b7f7eff99b4e110aa5e5271b31531add013b8ff098535ec0a3c71d6989a3988b584f0f56d0e43f2f41929ee0512c4fb50961b7a26f061bfc9a98cea214396dab19e884b17a2151a20322efe10a1f39859927559825b67556aad31caaf8348ed050f2921bfdb3495b17a9e93e219af85e4a32649d3907c699b3cd71a83e49dcaf11"
    }
    , "build": [{
        "flavour": "default"
        , "fqbn": "arduino:samd:mkr1000"
    }]
    , "default_flavour": "default"
    , "fqbn": "arduino:samd:mkr1000"
    , "id": "mkr1000"
    , "name": "Arduino/Genuino MKR1000"
    , "package": "arduino"
    , "pid": ["0x2341", "0x2341", "0x2341", "0x2341"]
    , "upload": [{
        "commandline": "\"{runtime.tools.bossac-1.7.0.path}/bossac\" {upload.verbose} --port={serial.port.file} -U true -i -e -w -v \"{build.path}/{build.project_name}.bin\" -R"
        , "ext": ".bin"
        , "flavour": "default"
        , "options": {
            "maximum_size": "262144"
            , "native_usb": "true"
            , "protocol": "sam-ba"
            , "signature": "66695789d14908f52cb1964da58ec9fa816d6ddb321900c60ad6ec2d84a7c713abb2b71404030c043e32cf548736eb706180da8256f2533bd132430896437c72b396abe19e632446f16e43b80b73f5cf40aec946d00e7543721cc72d77482a84d2d510e46ea6ee0aaf063ec267b5046a1ace36b7eb04c64b4140302586f1e10eda8452078498ab5c9985e8f5d521786064601daa5ba2978cf91cfeb64e83057b3475ec029a1b835460f4e203c1635eaba812b076248a3589cd5d84c52398f09d255f8aae25d66a40d5ab2b1700247defbdfd044c77d44078197d1f543800e11f79d6ef1c6eb46df65fe2fffd81716b11d798ba21a3ca2cb20f6d955d8e1f8aef"
            , "use_1200bps_touch": "true"
            , "wait_for_upload_port": "true"
        }
        , "params": {
            "quiet": ""
            , "verbose": "-i -d"
        }
        , "tool": "bossac"
        , "tool_version": "1.7.0"
    }]
    , "vid": ["0x2341", "0x2341", "0x2341", "0x2341"]
}, {
    "architecture": "samd"
    , "bootloader": {
        "commandline": "\"{runtime.tools.openocd.path}/bin/openocd\" {upload.verbose} -s \"{runtime.tools.openocd.path}/share/openocd/scripts/\" -f \"{build.path}/arduino_zero.cfg\" -c \"telnet_port disabled; program {build.path}/{build.project_name}.bin verify reset 0x00002000; shutdown\""
        , "signature": "07a902886d9324d43a9ef771297d825135e4871983ec1bb316e49f5567e119d48b939b2b52750d8eeec15130541181826be514a0f36cd4324857494437a11c5a591e7717a5c13fc34142e357d2f903460b8ccf929fddd0bcee8ff5179af19ff817c36d5d35b144e49ecdb7c72582c1b0a339b83fab2235ba61b0a9d3e10f62e52efa9a13588f73f412126d70bc3dfa14b2147b5a5d8490c9c26053bc06ff92d4ab1a871258970570f4a10cf455cd9a4201074c878c928ade285a3f0f6371f7906a1a7bc90c2089c82cdac32c86cdf51fe648e7544862559bb801aa2a2ddd55d0b40c3e41155d46022f2a825b40361920e5be66b182a8af1fdd7dcaf65c9fe9fd"
    }
    , "build": [{
        "flavour": "default"
        , "fqbn": "arduino:samd:arduino_zero_edbg"
    }]
    , "default_flavour": "default"
    , "fqbn": "arduino:samd:arduino_zero_edbg"
    , "id": "arduino_zero_edbg"
    , "name": "Arduino/Genuino Zero (Programming Port)"
    , "package": "arduino"
    , "pid": ["0x03eb"]
    , "upload": [{
        "commandline": "\"{runtime.tools.openocd.path}/bin/openocd\" {upload.verbose} -s \"{runtime.tools.openocd.path}/share/openocd/scripts/\" -f \"{build.path}/arduino_zero.cfg\" -c \"telnet_port disabled; program {build.path}/{build.project_name}.bin verify reset 0x00002000; shutdown\""
        , "ext": ".bin"
        , "flavour": "default"
        , "options": {
            "maximum_size": "262144"
            , "native_usb": "false"
            , "protocol": "sam-ba"
            , "signature": "07a902886d9324d43a9ef771297d825135e4871983ec1bb316e49f5567e119d48b939b2b52750d8eeec15130541181826be514a0f36cd4324857494437a11c5a591e7717a5c13fc34142e357d2f903460b8ccf929fddd0bcee8ff5179af19ff817c36d5d35b144e49ecdb7c72582c1b0a339b83fab2235ba61b0a9d3e10f62e52efa9a13588f73f412126d70bc3dfa14b2147b5a5d8490c9c26053bc06ff92d4ab1a871258970570f4a10cf455cd9a4201074c878c928ade285a3f0f6371f7906a1a7bc90c2089c82cdac32c86cdf51fe648e7544862559bb801aa2a2ddd55d0b40c3e41155d46022f2a825b40361920e5be66b182a8af1fdd7dcaf65c9fe9fd"
            , "use_1200bps_touch": "false"
            , "wait_for_upload_port": "false"
        }
        , "params": {
            "quiet": "-d0"
            , "verbose": "-d2"
        }
        , "tool": "openocd"
        , "tool_version": "0.9.0-arduino"
    }]
    , "vid": ["0x03eb"]
}, {
    "architecture": "samd"
    , "bootloader": {
        "commandline": "\"{runtime.tools.openocd-0.9.0-arduino.path}/bin/openocd\" {bootloader.verbose} -s \"{runtime.tools.openocd-0.9.0-arduino.path}/share/openocd/scripts/\" -f \"{runtime.platform.path}/variants/arduino_mzero/openocd_scripts/arduino_zero.cfg\" -c \"telnet_port disabled; init; halt; at91samd bootloader 0; program {{{runtime.platform.path}/bootloaders/mzero/Bootloader_D21_M0_Pro_150427.hex}} verify reset; shutdown\""
        , "signature": "67e1d2835af2f9ee29e028f05f6468de722361144841d589a951f51c1e251f55610cae8c3ba57b1995bbbaeace1e761b3fe1340ec0d93a47c1b6e02713c002521091960bd21892720cd660b93bb57072b09f2aa559ac767e4361828c51a2d6e31ddcfbd7f47cd13c2ce71ed7d6d16b62e19b7adc0e57b42b683a66f018ce684f93e9c4b63eae6750ea2a54138949d60abeed0c2aaa372cbc20446a290d6983d9a52d78a9d3d4f9b826d5ace2ce59160984fb6b422a947ca35904ccd9ebd1155b6fbe29459d3061d8b49596d4f46234400178c4326f1f924b812aa964dd395e61e76011832d45035ee828adb427c5f53e1c89191bee1b6588ad5d228a21484d68"
    }
    , "build": [{
        "flavour": "default"
        , "fqbn": "arduino:samd:mzero_pro_bl_dbg"
    }]
    , "default_flavour": "default"
    , "fqbn": "arduino:samd:mzero_pro_bl_dbg"
    , "id": "mzero_pro_bl_dbg"
    , "name": "Arduino M0 Pro (Programming Port)"
    , "package": "arduino"
    , "pid": ["0x03eb"]
    , "upload": [{
        "commandline": "\"{runtime.tools.openocd-0.9.0-arduino.path}/bin/openocd\" {upload.verbose} -s \"{runtime.tools.openocd-0.9.0-arduino.path}/share/openocd/scripts/\" -f \"{runtime.platform.path}/variants/arduino_mzero/openocd_scripts/arduino_zero.cfg\" -c \"telnet_port disabled; program {{{build.path}/{build.project_name}.bin}} verify reset 0x4000; shutdown\""
        , "ext": ".bin"
        , "flavour": "default"
        , "options": {
            "maximum_size": "262144"
            , "native_usb": "false"
            , "protocol": "sam-ba"
            , "signature": "198dfcfd948475ec5b59300b2ad7083d37ca1c90b9e79b4b6df43946f497b7485431da0b5ba4733abd1616057d0429c3e1f83bd14cfab4246592f5a0e3ed9dd62c3ea0012c24f35879e0f5781719e6db58db96e4d72149726d497337f9b0eb4f6b2fd3ea94fe88a5c43b07af90fc2bdece1ea51b873597673a58b1d383e679644360c2014881cd531b7bb088e9aa23909c9b5685c99301354e9d141c07307c9b79761e17919fdaa681d8a1a841de305c8f12644ac0242255c5e829100a6a9d8a172b856b42d81db3ef3e8c05826728be8949cdb9363b119a557ec1468fd319e354666b6e02e732bd23724661c3da9e39f06a20f90eeaffad5d9052a8d67e3827"
            , "use_1200bps_touch": "false"
            , "wait_for_upload_port": "false"
        }
        , "params": {
            "quiet": "-d0"
            , "verbose": "-d2"
        }
        , "tool": "openocd-withbootsize"
        , "tool_version": ""
    }]
    , "vid": ["0x03eb"]
}, {
    "architecture": "avr"
    , "bootloader": {
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {bootloader.verbose} -patmega32u4 -c{protocol} {program.extra_params} \"-Uflash:w:{runtime.platform.path}/bootloaders/caterina/Caterina-Circuitplay32u4.hex:i\" -Ulock:w:0x2F:m"
        , "signature": "abaf2d2905dbead86747f9924c1aaefb6b1cbaf18719226c414f08c4341fdc7ce2812f3df52feef8e0dd522ab3fb1d4eaae9800b1f290181eb25d7b17b6bd8a793f2ff1694a3f35162b8381c66bddda83c5cf2ec63e984f3b22fd14c89593b64ce0cfd163b2c140e6ac7a6c08bab06f6178cd1adbd2cb8fe5855cfc8af53756665ce936e28a17dee3d3de6d98df5b2560fcba6ebbb4f0d423fcc2cfc2b654f37bdcea9cce6ac4a04a1a961d8ce078f11f1b49f9d50fa98fa1cb90998c8a9903fb887958c96c03db3491eee07211ca989e698fd1b32759be18f5944d294f0feabcae370d27134c5740a4b6f510d49d3987fcdd75423f0d213b57d7a7d3bb0d958"
    }
    , "build": [{
        "flavour": "default"
        , "fqbn": "arduino:avr:circuitplay32u4cat"
    }]
    , "default_flavour": "default"
    , "fqbn": "arduino:avr:circuitplay32u4cat"
    , "id": "circuitplay32u4cat"
    , "name": "Adafruit Circuit Playground"
    , "package": "arduino"
    , "pid": ["0x239A"]
    , "upload": [{
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {upload.verbose}  -patmega32u4 -cavr109 -P{serial.port} -b57600 -D \"-Uflash:w:{build.path}/{build.project_name}.hex:i\""
        , "ext": ".hex"
        , "flavour": "default"
        , "options": {
            "disable_flushing": "true"
            , "maximum_size": "28672"
            , "protocol": "avr109"
            , "signature": "15a80bb8e911d82ee8c36d14bc5c00348f307ac8eaba5357366eeeb776a2e4eefa85a061d22ebde27482841de67e95d471700e8487adf3adda94d2b1091c68ab4d5b5098ad6f3f0e63878be52b3459a3966e82bbf0f160f13f2fcbc2ae06f296271f19bc8fef67e038b12746fc863e76df2929ee6f2f18b604825615179da99d6a62f9e6ac6ce88f4b80c1399c9e81b734c938b34cfc1147e111bafa2ccab786cc6649baa61e45f6bf8a7a41607052207f00b3fa1c10c518804d19de55af182019ee32d99405dedfd970cd0be57953b26c6b6ca3343e25a39936583cad9894e209a38c09eb8bd74d4df99812c8a939001f0242c544b43e5f853c02de949a29a8"
            , "speed": "57600"
            , "use_1200bps_touch": "true"
            , "wait_for_upload_port": "true"
        }
        , "params": {
            "noverify": "-V"
            , "quiet": "-q -q"
            , "verbose": "-v"
        }
        , "tool": "avrdude"
        , "tool_version": "6.3.0-arduino8"
    }]
    , "vid": ["0x239A"]
}, {
    "architecture": "avr"
    , "bootloader": {
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {bootloader.verbose} -p{build.mcu} -c{protocol} {program.extra_params} \"-Uflash:w:{runtime.platform.path}/bootloaders/{bootloader.file}:i\" -Ulock:w:0x0F:m"
        , "signature": "6c0de0c02e2c8feb902d672025b0feb1e7ef380f00c87d4ebe1b63bc91957de5311517cd949cef93ae4f98dfbd159b7a034d3d68889c88e6febd4952375511d2516c7d94c0a4085c6631be971187397a9989ff5d27ca9a908c6535179fd3893d83cd4771c3a2da0927042e0828f0967dbde200b20c7e52bc13b9468248ba7ce4ac29471f55a9a94627fc2f8227b454bdf7f77a6e74b959f2f959a28357f3947b6a92648c0eb875aac808317d6fc8958be6959779227d8f09f8ff813dbb4fcea5095107bd0348f8085a229d733c97164c032701cd6e5d392c8f71ac006afdaa8cd885ff68f5a2c690445f1df5a274cb5194795be35d33e1a23c4936068e62f6bc"
    }
    , "build": [{
        "flavour": "atmega328"
        , "fqbn": "arduino:avr:nano:cpu=atmega328"
    }, {
        "flavour": "atmega168"
        , "fqbn": "arduino:avr:nano:cpu=atmega168"
    }]
    , "default_flavour": "atmega328"
    , "fqbn": "arduino:avr:nano:cpu=atmega328"
    , "id": "nano"
    , "name": "Arduino Nano"
    , "package": "arduino"
    , "upload": [{
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {upload.verbose}  -patmega168 -carduino -P{serial.port} -b19200 -D \"-Uflash:w:{build.path}/{build.project_name}.hex:i\""
        , "ext": ".hex"
        , "flavour": "atmega168"
        , "options": {
            "signature": "44329ed10991e0d10061f165ef7d9768327a7d83c10be3cd94ccf4a28ec577d80572a0bc785bbaea4bc3b30f865dc78fdb58ef89e35d3b8c58cd0f44f00cd157a6e273323133576a698f1506c5fad9d151372ce16ed1149aca0953da61f69285d6f859781c2314e6b1a2f315e692638680d505c6832c0e4bf825a29f2be25dae94642d027c45257dc1d07dff159c4017073c1a8b50fbfd23616d3fccb4098a981cc6110e062a6b0dae6a3f2f9e4388baacd879e3c44a64e7e7ec0d4d48bb3c24206fa2fdabbe73f6a72b1eb824b2260dfb777a656756c0b37fadc6486e4994c138cbb0405018f2c8019605bbebeb9a7d9e273711fa356715258619c708cab90e"
        }
        , "params": {
            "noverify": "-V"
            , "quiet": "-q -q"
            , "verbose": "-v"
        }
        , "tool": "avrdude"
        , "tool_version": "6.3.0-arduino8"
    }, {
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {upload.verbose}  -patmega328p -carduino -P{serial.port} -b57600 -D \"-Uflash:w:{build.path}/{build.project_name}.hex:i\""
        , "ext": ".hex"
        , "flavour": "atmega328"
        , "options": {
            "signature": "945c13862d3bc08bd212970e6e5f9784207a3c503c0f086e6a948a7b2ddd23ab424cc1ea5ebc408a59b30cae59d2b2366fc2a89d753c951afe4245e0e8eba194874740eae41d5c504f9c33596bfb832dd628225ee20a7754d8726a51d6596a3a44f63cff38924089e131d968cdc739ef42d27078d04360ef9aedc3c359f72d201c4ebc4fab25a22d1a66c10faa27f72daca89b9069c10cd5865c6f42d8d6c14f70285dbd2ca67fb09dfb551a12f09df252a4993f0131759c632db462e3ec1a9e20f6cc564cda1e3f25324064ec6c038712713a12b4cbadea74bc67ba05404b21235adf450194746ec60fc483e315e082aa6e9698ecb2292fdfd955aab0404b15"
        }
        , "params": {
            "noverify": "-V"
            , "quiet": "-q -q"
            , "verbose": "-v"
        }
        , "tool": "avrdude"
        , "tool_version": "6.3.0-arduino8"
    }]
}, {
    "architecture": "avr"
    , "bootloader": {
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {bootloader.verbose} -patmega32u4 -c{protocol} {program.extra_params} \"-Uflash:w:{runtime.platform.path}/bootloaders/caterina-Arduino_Robot/Caterina-Robot-Control.hex:i\" -Ulock:w:0x2F:m"
        , "signature": "27e762877c185a4a106f74077f37be0a3cb3832dd40673e0208361cd19f03ee00da0acb7e199dcfd163ceea3e79ee689da12cee6064bd1d78b7ff77bc8ee1765914166e00d2ec3a0fb7643cce8ecd60379ee5d21fed8b5f6581aba1c5c472afc9177609fbad010dbb10e7009c8c21164f3d2a00755152c913edd172962ec08c9d76a017cd83437abf10f5716cb3980e512d9899af1d810bdbf13df91cc51197c1c742456fc14769216a2d1691034c7128efe89b49d48b79799be7c33ff7c97029b3dfb2e2413bae9940d765af52e8e480dbd53a8a70ad7b1824cfb8d2cc4b60a5090bc73af3e1a9d44d136ef3e5a7966484231cd42953605d090aae80c646272"
    }
    , "build": [{
        "flavour": "default"
        , "fqbn": "arduino:avr:robotControl"
    }]
    , "default_flavour": "default"
    , "fqbn": "arduino:avr:robotControl"
    , "id": "robotControl"
    , "name": "Arduino Robot Control"
    , "package": "arduino"
    , "pid": ["0x2341", "0x2341", "0x2A03", "0x2A03"]
    , "upload": [{
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {upload.verbose}  -patmega32u4 -cavr109 -P{serial.port} -b57600 -D \"-Uflash:w:{build.path}/{build.project_name}.hex:i\""
        , "ext": ".hex"
        , "flavour": "default"
        , "options": {
            "disable_flushing": "true"
            , "maximum_data_size": "2560"
            , "maximum_size": "28672"
            , "protocol": "avr109"
            , "signature": "15a80bb8e911d82ee8c36d14bc5c00348f307ac8eaba5357366eeeb776a2e4eefa85a061d22ebde27482841de67e95d471700e8487adf3adda94d2b1091c68ab4d5b5098ad6f3f0e63878be52b3459a3966e82bbf0f160f13f2fcbc2ae06f296271f19bc8fef67e038b12746fc863e76df2929ee6f2f18b604825615179da99d6a62f9e6ac6ce88f4b80c1399c9e81b734c938b34cfc1147e111bafa2ccab786cc6649baa61e45f6bf8a7a41607052207f00b3fa1c10c518804d19de55af182019ee32d99405dedfd970cd0be57953b26c6b6ca3343e25a39936583cad9894e209a38c09eb8bd74d4df99812c8a939001f0242c544b43e5f853c02de949a29a8"
            , "speed": "57600"
            , "use_1200bps_touch": "true"
            , "wait_for_upload_port": "true"
        }
        , "params": {
            "noverify": "-V"
            , "quiet": "-q -q"
            , "verbose": "-v"
        }
        , "tool": "avrdude"
        , "tool_version": "6.3.0-arduino8"
    }]
    , "vid": ["0x2341", "0x2341", "0x2A03", "0x2A03"]
}, {
    "architecture": "avr"
    , "bootloader": {
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {bootloader.verbose} -patmega328p -c{protocol} {program.extra_params} \"-Uflash:w:{runtime.platform.path}/bootloaders/optiboot/optiboot_atmega328.hex:i\" -Ulock:w:0x0F:m"
        , "signature": "16415a473927904c2929ebdce541db9bc9ec810b500c25832735deb2ce230a37bc42ddc35374c8ed40683ab8c8f19396cf23e31fa194072d70f574ecac9716f48fd7b37f18f80d7ae02f31e193ae4f4a2f44091c18fdaf25ca757ae3d7af07edc4d7065072e56da56410a50acfa4db4cb15e7f0345e1f889582c0cd05d0b83f89502142a33665efd404a3e94a8f6360ed81efdff9aad2a8e95ba04e52600cc90391ed0c89e3528ada65a39f81f2b19fd0d30d39375d1be327e781092f595c319c0e6a490283b86ea90ddb98c30527028f1d1069d50852a0e6838a4d2c43991b197d0ee5c2d24a32fd598a23281df281781ca3bda1310a82ba4fc829c37fff6fa"
    }
    , "build": [{
        "flavour": "default"
        , "fqbn": "arduino:avr:uno"
    }]
    , "default_flavour": "default"
    , "fqbn": "arduino:avr:uno"
    , "id": "uno"
    , "name": "Arduino/Genuino Uno"
    , "package": "arduino"
    , "pid": ["0x2341", "0x2341", "0x2341", "0x2A03"]
    , "upload": [{
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {upload.verbose}  -patmega328p -carduino -P{serial.port} -b115200 -D \"-Uflash:w:{build.path}/{build.project_name}.hex:i\""
        , "ext": ".hex"
        , "flavour": "default"
        , "options": {
            "maximum_data_size": "2048"
            , "maximum_size": "32256"
            , "protocol": "arduino"
            , "signature": "818f95e84bd149f2ad3cf82d383ca674b342f994921b34087afc6acc10b60370252fdf138a1f8e20666be623e13fdf976e4db145ded20cac7d324ae3f398093e8644f4f575bf65d988db0e9e4bd832756d54bc07b6478100c615ae49272f4b1eece680850fd8c63d772883783f4ea8e122a8e189e253c90978a6417cf4217e7c88d06fd2e470ffbad316537669b6db9b7de9709934aab3f12de5c3a2a8df30a91a84acf66487ed80cc286a50a598f855f4df4296eba07e49f054e0fec0d32b0928a68e6634cf656f41a3c663fbdf4e48b253dcfa02cc2d0826c216e4c2e979f5b43b1a2f171f75ea0fecf61b094a1896a8494eceda7899a4a02ca75d1f40790b"
            , "speed": "115200"
        }
        , "params": {
            "noverify": "-V"
            , "quiet": "-q -q"
            , "verbose": "-v"
        }
        , "tool": "avrdude"
        , "tool_version": "6.3.0-arduino8"
    }]
    , "vid": ["0x2341", "0x2341", "0x2341", "0x2A03"]
}, {
    "architecture": "avr"
    , "bootloader": {
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {bootloader.verbose} -patmega32u4 -c{protocol} {program.extra_params} \"-Uflash:w:{runtime.platform.path}/bootloaders/caterina/Caterina-Leonardo.hex:i\" -Ulock:w:0x2F:m"
        , "signature": "05cd4fbfb20e47c8c6a4e631dc48d1bf8664274687112dad1a39320df2eef4c95c0816cf1dcf051cc32b2486fc39cfc5f49b225daef58f6b3b686dae3c134e76b724a69ebd002de4eeab339d584fd0abeb2761b2ddbb50688c0413626d8c94d0fada89797ad94af17ca3c7adef240612af703b5f9e3df9528184276abc9062bdabc89c4b38fb54d93c58696b4f7e190d0de983d86bd4f35236a54af678625eb380cb565a26a71ad9b07d458c46b36e230ad91cb3e6764405562df7433883311c024451e1d44a6e804fb0d2a8f96a82df81a7f993197f3ee1d9071dc8ca2146c2156fd48db201ed66c42303ee144b6f472f16bb1d3e25e4dbab3c854e1cea9621"
    }
    , "build": [{
        "flavour": "default"
        , "fqbn": "arduino:avr:leonardo"
    }]
    , "default_flavour": "default"
    , "fqbn": "arduino:avr:leonardo"
    , "id": "leonardo"
    , "name": "Arduino Leonardo"
    , "package": "arduino"
    , "pid": ["0x2A03", "0x2A03", "0x2341", "0x2341"]
    , "upload": [{
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {upload.verbose}  -patmega32u4 -cavr109 -P{serial.port} -b57600 -D \"-Uflash:w:{build.path}/{build.project_name}.hex:i\""
        , "ext": ".hex"
        , "flavour": "default"
        , "options": {
            "disable_flushing": "true"
            , "maximum_data_size": "2560"
            , "maximum_size": "28672"
            , "protocol": "avr109"
            , "signature": "15a80bb8e911d82ee8c36d14bc5c00348f307ac8eaba5357366eeeb776a2e4eefa85a061d22ebde27482841de67e95d471700e8487adf3adda94d2b1091c68ab4d5b5098ad6f3f0e63878be52b3459a3966e82bbf0f160f13f2fcbc2ae06f296271f19bc8fef67e038b12746fc863e76df2929ee6f2f18b604825615179da99d6a62f9e6ac6ce88f4b80c1399c9e81b734c938b34cfc1147e111bafa2ccab786cc6649baa61e45f6bf8a7a41607052207f00b3fa1c10c518804d19de55af182019ee32d99405dedfd970cd0be57953b26c6b6ca3343e25a39936583cad9894e209a38c09eb8bd74d4df99812c8a939001f0242c544b43e5f853c02de949a29a8"
            , "speed": "57600"
            , "use_1200bps_touch": "true"
            , "wait_for_upload_port": "true"
        }
        , "params": {
            "noverify": "-V"
            , "quiet": "-q -q"
            , "verbose": "-v"
        }
        , "tool": "avrdude"
        , "tool_version": "6.3.0-arduino8"
    }]
    , "vid": ["0x2A03", "0x2A03", "0x2341", "0x2341"]
}, {
    "architecture": "avr"
    , "bootloader": {
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {bootloader.verbose} -p{build.mcu} -c{protocol} {program.extra_params} \"-Uflash:w:{runtime.platform.path}/bootloaders/{bootloader.file}:i\" -Ulock:w:0x0F:m"
        , "signature": "6c0de0c02e2c8feb902d672025b0feb1e7ef380f00c87d4ebe1b63bc91957de5311517cd949cef93ae4f98dfbd159b7a034d3d68889c88e6febd4952375511d2516c7d94c0a4085c6631be971187397a9989ff5d27ca9a908c6535179fd3893d83cd4771c3a2da0927042e0828f0967dbde200b20c7e52bc13b9468248ba7ce4ac29471f55a9a94627fc2f8227b454bdf7f77a6e74b959f2f959a28357f3947b6a92648c0eb875aac808317d6fc8958be6959779227d8f09f8ff813dbb4fcea5095107bd0348f8085a229d733c97164c032701cd6e5d392c8f71ac006afdaa8cd885ff68f5a2c690445f1df5a274cb5194795be35d33e1a23c4936068e62f6bc"
    }
    , "build": [{
        "flavour": "atmega328"
        , "fqbn": "arduino:avr:mini:cpu=atmega328"
    }, {
        "flavour": "atmega168"
        , "fqbn": "arduino:avr:mini:cpu=atmega168"
    }]
    , "default_flavour": "atmega328"
    , "fqbn": "arduino:avr:mini:cpu=atmega328"
    , "id": "mini"
    , "name": "Arduino Mini"
    , "package": "arduino"
    , "upload": [{
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {upload.verbose}  -patmega328p -carduino -P{serial.port} -b115200 -D \"-Uflash:w:{build.path}/{build.project_name}.hex:i\""
        , "ext": ".hex"
        , "flavour": "atmega328"
        , "options": {
            "signature": "818f95e84bd149f2ad3cf82d383ca674b342f994921b34087afc6acc10b60370252fdf138a1f8e20666be623e13fdf976e4db145ded20cac7d324ae3f398093e8644f4f575bf65d988db0e9e4bd832756d54bc07b6478100c615ae49272f4b1eece680850fd8c63d772883783f4ea8e122a8e189e253c90978a6417cf4217e7c88d06fd2e470ffbad316537669b6db9b7de9709934aab3f12de5c3a2a8df30a91a84acf66487ed80cc286a50a598f855f4df4296eba07e49f054e0fec0d32b0928a68e6634cf656f41a3c663fbdf4e48b253dcfa02cc2d0826c216e4c2e979f5b43b1a2f171f75ea0fecf61b094a1896a8494eceda7899a4a02ca75d1f40790b"
        }
        , "params": {
            "noverify": "-V"
            , "quiet": "-q -q"
            , "verbose": "-v"
        }
        , "tool": "avrdude"
        , "tool_version": "6.3.0-arduino8"
    }, {
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {upload.verbose}  -patmega168 -carduino -P{serial.port} -b19200 -D \"-Uflash:w:{build.path}/{build.project_name}.hex:i\""
        , "ext": ".hex"
        , "flavour": "atmega168"
        , "options": {
            "signature": "44329ed10991e0d10061f165ef7d9768327a7d83c10be3cd94ccf4a28ec577d80572a0bc785bbaea4bc3b30f865dc78fdb58ef89e35d3b8c58cd0f44f00cd157a6e273323133576a698f1506c5fad9d151372ce16ed1149aca0953da61f69285d6f859781c2314e6b1a2f315e692638680d505c6832c0e4bf825a29f2be25dae94642d027c45257dc1d07dff159c4017073c1a8b50fbfd23616d3fccb4098a981cc6110e062a6b0dae6a3f2f9e4388baacd879e3c44a64e7e7ec0d4d48bb3c24206fa2fdabbe73f6a72b1eb824b2260dfb777a656756c0b37fadc6486e4994c138cbb0405018f2c8019605bbebeb9a7d9e273711fa356715258619c708cab90e"
        }
        , "params": {
            "noverify": "-V"
            , "quiet": "-q -q"
            , "verbose": "-v"
        }
        , "tool": "avrdude"
        , "tool_version": "6.3.0-arduino8"
    }]
}, {
    "architecture": "avr"
    , "bootloader": {
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {bootloader.verbose} -p{build.mcu} -c{protocol} {program.extra_params} \"-Uflash:w:{runtime.platform.path}/bootloaders/{bootloader.file}:i\" -Ulock:w:0x0F:m"
        , "signature": "6c0de0c02e2c8feb902d672025b0feb1e7ef380f00c87d4ebe1b63bc91957de5311517cd949cef93ae4f98dfbd159b7a034d3d68889c88e6febd4952375511d2516c7d94c0a4085c6631be971187397a9989ff5d27ca9a908c6535179fd3893d83cd4771c3a2da0927042e0828f0967dbde200b20c7e52bc13b9468248ba7ce4ac29471f55a9a94627fc2f8227b454bdf7f77a6e74b959f2f959a28357f3947b6a92648c0eb875aac808317d6fc8958be6959779227d8f09f8ff813dbb4fcea5095107bd0348f8085a229d733c97164c032701cd6e5d392c8f71ac006afdaa8cd885ff68f5a2c690445f1df5a274cb5194795be35d33e1a23c4936068e62f6bc"
    }
    , "build": [{
        "flavour": "16MHzatmega168"
        , "fqbn": "arduino:avr:pro:cpu=16MHzatmega168"
    }, {
        "flavour": "8MHzatmega168"
        , "fqbn": "arduino:avr:pro:cpu=8MHzatmega168"
    }, {
        "flavour": "8MHzatmega328"
        , "fqbn": "arduino:avr:pro:cpu=8MHzatmega328"
    }, {
        "flavour": "16MHzatmega328"
        , "fqbn": "arduino:avr:pro:cpu=16MHzatmega328"
    }]
    , "default_flavour": "16MHzatmega328"
    , "fqbn": "arduino:avr:pro:cpu=16MHzatmega328"
    , "id": "pro"
    , "name": "Arduino Pro or Pro Mini"
    , "package": "arduino"
    , "upload": [{
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {upload.verbose}  -patmega328p -carduino -P{serial.port} -b57600 -D \"-Uflash:w:{build.path}/{build.project_name}.hex:i\""
        , "ext": ".hex"
        , "flavour": "16MHzatmega328"
        , "options": {
            "signature": "945c13862d3bc08bd212970e6e5f9784207a3c503c0f086e6a948a7b2ddd23ab424cc1ea5ebc408a59b30cae59d2b2366fc2a89d753c951afe4245e0e8eba194874740eae41d5c504f9c33596bfb832dd628225ee20a7754d8726a51d6596a3a44f63cff38924089e131d968cdc739ef42d27078d04360ef9aedc3c359f72d201c4ebc4fab25a22d1a66c10faa27f72daca89b9069c10cd5865c6f42d8d6c14f70285dbd2ca67fb09dfb551a12f09df252a4993f0131759c632db462e3ec1a9e20f6cc564cda1e3f25324064ec6c038712713a12b4cbadea74bc67ba05404b21235adf450194746ec60fc483e315e082aa6e9698ecb2292fdfd955aab0404b15"
        }
        , "params": {
            "noverify": "-V"
            , "quiet": "-q -q"
            , "verbose": "-v"
        }
        , "tool": "avrdude"
        , "tool_version": "6.3.0-arduino8"
    }, {
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {upload.verbose}  -patmega168 -carduino -P{serial.port} -b19200 -D \"-Uflash:w:{build.path}/{build.project_name}.hex:i\""
        , "ext": ".hex"
        , "flavour": "16MHzatmega168"
        , "options": {
            "signature": "44329ed10991e0d10061f165ef7d9768327a7d83c10be3cd94ccf4a28ec577d80572a0bc785bbaea4bc3b30f865dc78fdb58ef89e35d3b8c58cd0f44f00cd157a6e273323133576a698f1506c5fad9d151372ce16ed1149aca0953da61f69285d6f859781c2314e6b1a2f315e692638680d505c6832c0e4bf825a29f2be25dae94642d027c45257dc1d07dff159c4017073c1a8b50fbfd23616d3fccb4098a981cc6110e062a6b0dae6a3f2f9e4388baacd879e3c44a64e7e7ec0d4d48bb3c24206fa2fdabbe73f6a72b1eb824b2260dfb777a656756c0b37fadc6486e4994c138cbb0405018f2c8019605bbebeb9a7d9e273711fa356715258619c708cab90e"
        }
        , "params": {
            "noverify": "-V"
            , "quiet": "-q -q"
            , "verbose": "-v"
        }
        , "tool": "avrdude"
        , "tool_version": "6.3.0-arduino8"
    }, {
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {upload.verbose}  -patmega168 -carduino -P{serial.port} -b19200 -D \"-Uflash:w:{build.path}/{build.project_name}.hex:i\""
        , "ext": ".hex"
        , "flavour": "8MHzatmega168"
        , "options": {
            "signature": "44329ed10991e0d10061f165ef7d9768327a7d83c10be3cd94ccf4a28ec577d80572a0bc785bbaea4bc3b30f865dc78fdb58ef89e35d3b8c58cd0f44f00cd157a6e273323133576a698f1506c5fad9d151372ce16ed1149aca0953da61f69285d6f859781c2314e6b1a2f315e692638680d505c6832c0e4bf825a29f2be25dae94642d027c45257dc1d07dff159c4017073c1a8b50fbfd23616d3fccb4098a981cc6110e062a6b0dae6a3f2f9e4388baacd879e3c44a64e7e7ec0d4d48bb3c24206fa2fdabbe73f6a72b1eb824b2260dfb777a656756c0b37fadc6486e4994c138cbb0405018f2c8019605bbebeb9a7d9e273711fa356715258619c708cab90e"
        }
        , "params": {
            "noverify": "-V"
            , "quiet": "-q -q"
            , "verbose": "-v"
        }
        , "tool": "avrdude"
        , "tool_version": "6.3.0-arduino8"
    }, {
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {upload.verbose}  -patmega328p -carduino -P{serial.port} -b57600 -D \"-Uflash:w:{build.path}/{build.project_name}.hex:i\""
        , "ext": ".hex"
        , "flavour": "8MHzatmega328"
        , "options": {
            "signature": "945c13862d3bc08bd212970e6e5f9784207a3c503c0f086e6a948a7b2ddd23ab424cc1ea5ebc408a59b30cae59d2b2366fc2a89d753c951afe4245e0e8eba194874740eae41d5c504f9c33596bfb832dd628225ee20a7754d8726a51d6596a3a44f63cff38924089e131d968cdc739ef42d27078d04360ef9aedc3c359f72d201c4ebc4fab25a22d1a66c10faa27f72daca89b9069c10cd5865c6f42d8d6c14f70285dbd2ca67fb09dfb551a12f09df252a4993f0131759c632db462e3ec1a9e20f6cc564cda1e3f25324064ec6c038712713a12b4cbadea74bc67ba05404b21235adf450194746ec60fc483e315e082aa6e9698ecb2292fdfd955aab0404b15"
        }
        , "params": {
            "noverify": "-V"
            , "quiet": "-q -q"
            , "verbose": "-v"
        }
        , "tool": "avrdude"
        , "tool_version": "6.3.0-arduino8"
    }]
}, {
    "architecture": "avr"
    , "bootloader": {
        "commandline": ""
        , "signature": "55664ae12c257330bf47f8db4c66d0f46a0f0ff1d1c70e6f345def1f91db21044bcba010b5b7a33aaa97ee65e19baa68ccb0e198af486252ca42911d5a5660e2f6b5f5d0d76f6ec2eb9594238abb857fe5c3fc1263d1861f5e9adbe78eb108acfcd07701e7148b605031ecab5b780c210d2e409e061cfb24fc4aaada046e295ebdd986adec9d9ac1faacfbce4d55c36c0fe98e40268f3aef7708d250819a005184ae01285866712f28bbcd092da5b9d4a4f7b67d98f81856244a2e7c09b8eb54e5dff3ca60051634c3a05c6410ff3fa78bf1ba2ac0c6b36015a0eba35119211574b3d4ca8ab3dd2a144d1da50212972038359e6603c8d5ee26b4931b9f18d2aa"
    }
    , "build": [{
        "flavour": "default"
        , "fqbn": "littleBits:avr:w6_arduino"
    }]
    , "default_flavour": "default"
    , "fqbn": "littleBits:avr:w6_arduino"
    , "id": "w6_arduino"
    , "name": "littleBits w6 Arduino Module (Leonardo)"
    , "package": "littleBits"
    , "upload": [{
        "commandline": ""
        , "ext": ""
        , "flavour": "default"
        , "options": {
            "disable_flushing": "true"
            , "maximum_data_size": "2560"
            , "maximum_size": "28672"
            , "protocol": "avr109"
            , "signature": "55664ae12c257330bf47f8db4c66d0f46a0f0ff1d1c70e6f345def1f91db21044bcba010b5b7a33aaa97ee65e19baa68ccb0e198af486252ca42911d5a5660e2f6b5f5d0d76f6ec2eb9594238abb857fe5c3fc1263d1861f5e9adbe78eb108acfcd07701e7148b605031ecab5b780c210d2e409e061cfb24fc4aaada046e295ebdd986adec9d9ac1faacfbce4d55c36c0fe98e40268f3aef7708d250819a005184ae01285866712f28bbcd092da5b9d4a4f7b67d98f81856244a2e7c09b8eb54e5dff3ca60051634c3a05c6410ff3fa78bf1ba2ac0c6b36015a0eba35119211574b3d4ca8ab3dd2a144d1da50212972038359e6603c8d5ee26b4931b9f18d2aa"
            , "speed": "57600"
            , "use_1200bps_touch": "true"
            , "wait_for_upload_port": "true"
        }
        , "tool": "arduino:avrdude"
        , "tool_version": ""
    }]
}, {
    "architecture": "arc32"
    , "bootloader": {
        "commandline": "{runtime.tools.flashpack.path}/flash_dfu.sh"
        , "signature": "396467fa6117d262a79bba0687084b31d94508f7926e8ba3ca8a5f11d022b7358baf3f7ca0757a2eb1780fe16ccbb970da4b3189be06a720654da22765e7d044ab76d889d18fe1c178d107f3caa02b1d66104e909f460e81e5ead38e8d31d569be71028875469e72a286dc15b5bc82a18048aa0dfe2654e9d60f6d4251b1b3561ab143f7d56ccb7c1ea198f766786885a385b2ddd75191798f360a5d7084835dc5b6cdc6b63eea15e39b106556ae3ff17b1038296e473c64e00c6817239c0a176b00e6183cc4e5e4405bfa6933e509f8fd1e80a09c758ca3cd9a6be79f9c7e2a46bda03126c3573a75279791a4ceb86a1319ca745e923d427af2682ab2fb6af1"
    }
    , "build": [{
        "flavour": "default"
        , "fqbn": "Intel:arc32:arduino_101"
    }]
    , "default_flavour": "default"
    , "fqbn": "Intel:arc32:arduino_101"
    , "id": "arduino_101"
    , "name": "Arduino/Genuino 101"
    , "package": "Intel"
    , "pid": ["0x8087"]
    , "upload": [{
        "commandline": "\"{runtime.tools.arduino101load.path}/arduino101load/arduino101load\" \"{runtime.tools.arduino101load.path}/x86/bin\" {build.path}/{build.project_name}.bin {serial.port} \"{upload.verbose}\" \"ATP1BLE000-1541C5635\" 141312"
        , "ext": ".bin"
        , "flavour": "default"
        , "options": {
            "maximum_size": "155648"
            , "native_usb": "false"
            , "params.quiet": "-q"
            , "params.verbose": "-q"
            , "protocol": "script"
            , "signature": "aaba72fda8bd40e168836271835be7b4e52d01888a73912d06cb46a2bda765906aab6bb640f44ae0dd9f2550203c8bf050ede649651123dd6b271e2a9ef51011ce42a7ca57450c614d7b8bd758189a4599d29a4bf5d11f1a0e3c3c143296c9f8a6fa89c1a71bd9bf49fa9f28dabaadd648a4f046c973fe4c07f2e3c863966be114c05343bc0817caf2f64e39a713b92ad4da412faed7785a09d7613fa4b10b0960198ec7719d550d748fcef5254588ca0b5f27cf0fa43d697a08617f73f570b5e9c53e51c34b1a91380c6c8c40b1a64bfd9e0654baf9b7c66f62884589fef77c7e548056835a913028f48c6521ccadd10b595e967e408fe38cbdc110633b423f"
            , "use_1200bps_touch": "true"
            , "wait_for_upload_port": "false"
        }
        , "params": {
            "quiet": "quiet"
            , "verbose": "verbose"
        }
        , "tool": "arduino101load"
        , "tool_version": "1.6.9+1.28"
    }]
    , "vid": ["0x8087"]
}, {
    "architecture": "i586"
    , "bootloader": {
        "commandline": ""
        , "signature": "55664ae12c257330bf47f8db4c66d0f46a0f0ff1d1c70e6f345def1f91db21044bcba010b5b7a33aaa97ee65e19baa68ccb0e198af486252ca42911d5a5660e2f6b5f5d0d76f6ec2eb9594238abb857fe5c3fc1263d1861f5e9adbe78eb108acfcd07701e7148b605031ecab5b780c210d2e409e061cfb24fc4aaada046e295ebdd986adec9d9ac1faacfbce4d55c36c0fe98e40268f3aef7708d250819a005184ae01285866712f28bbcd092da5b9d4a4f7b67d98f81856244a2e7c09b8eb54e5dff3ca60051634c3a05c6410ff3fa78bf1ba2ac0c6b36015a0eba35119211574b3d4ca8ab3dd2a144d1da50212972038359e6603c8d5ee26b4931b9f18d2aa"
    }
    , "build": [{
        "flavour": "default"
        , "fqbn": "Intel:i586:izmir_fg"
    }]
    , "default_flavour": "default"
    , "fqbn": "Intel:i586:izmir_fg"
    , "id": "izmir_fg"
    , "name": "Intel® Galileo Gen2"
    , "package": "Intel"
    , "pid": ["0x8086"]
    , "upload": [{
        "commandline": "/bin/bash --verbose --noprofile \"{runtime.tools.sketchUploader-1.6.2+1.0.path}/clupload/cluploadGalileo_osx.sh\" \"{runtime.tools.sketchUploader-1.6.2+1.0.path}/x86/bin\" {build.path}/{build.project_name}.elf {serial.port}"
        , "ext": ""
        , "flavour": "default"
        , "options": {
            "maximum_size": "10000000"
            , "native_usb": "false"
            , "protocol": "sam-ba"
            , "signature": "ac5c80a63a4e93e89615c514777030fa201e88e92ba9411f33a6aa52ad21b2bbad4ae74bbcbffc9e8293269dd51dab43564747dfc65c1e9d48fbcc9b93c3a1a8b7406050f5f706234376e0069ceda8545cd21ac5ad5bc6b9a5ff5009c988699278695db4bea04ba37f9774769187c1974dda3dbb79ba8b73355ee366655b300ab63c0130f7415b07294d710893c480b1b43e682f32610b04ea8902dab013de1bf1ad4c3efedb09c839493e8f10268ae290124177ed39f460a3d17a34d3de224b837cca2a05a4c336ec31a367871279072c6242ba80beab3bf66df905556c2162f49e51cdfde235db9afabdb94e9dd5810529538744d47770df9a20812a2e5919"
            , "use_1200bps_touch": "false"
            , "wait_for_upload_port": "false"
        }
        , "params": {
            "quiet": "-q"
            , "verbose": "-vvvvvv"
        }
        , "tool": "izmirdl"
        , "tool_version": ""
    }]
    , "vid": ["0x8086"]
}, {
    "architecture": "avr"
    , "bootloader": {
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {bootloader.verbose} -patmega32u4 -c{protocol} {program.extra_params} \"-Uflash:w:{runtime.platform.path}/bootloaders/caterina/Caterina-Micro.hex:i\" -Ulock:w:0x2F:m"
        , "signature": "9d3e6ce82b0b848f6ba0d055fb987cdb652184e65ce679c495012f8c5cbfea16f8e90f01e73eb4ff34d1e80cc744e038e3b0a5e87eb0e5b86382f7f04a69bf05a6c57eaa846b34ef0a795ceb7a6be43b668d449c127708631e61b7177516622c166928583d3110ffdad77cf264a81e9ace14df6ec60700254d1d654cac6b422476d8fcc7a8c7f0a0355f78cf3575d72f647f6b2ecca3f5a80d663d6cadba3429f039ac6f838552c4c59653873f456a2ccb6af6d2464e23386ef5653d53cd4e5bb3127ac6b8c3f0e31264cda8e83feef884140f3e7b8c107846d09ed8b8d13c6edfdd33f2ffb0e55837b637484783833e5f4b1777b7dc247d1292b321c41fcbb4"
    }
    , "build": [{
        "flavour": "default"
        , "fqbn": "arduino:avr:micro"
    }]
    , "default_flavour": "default"
    , "fqbn": "arduino:avr:micro"
    , "id": "micro"
    , "name": "Arduino/Genuino Micro"
    , "package": "arduino"
    , "pid": ["0x2341", "0x2A03", "0x2341", "0x2341", "0x2341", "0x2A03"]
    , "upload": [{
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {upload.verbose}  -patmega32u4 -cavr109 -P{serial.port} -b57600 -D \"-Uflash:w:{build.path}/{build.project_name}.hex:i\""
        , "ext": ".hex"
        , "flavour": "default"
        , "options": {
            "disable_flushing": "true"
            , "maximum_data_size": "2560"
            , "maximum_size": "28672"
            , "protocol": "avr109"
            , "signature": "15a80bb8e911d82ee8c36d14bc5c00348f307ac8eaba5357366eeeb776a2e4eefa85a061d22ebde27482841de67e95d471700e8487adf3adda94d2b1091c68ab4d5b5098ad6f3f0e63878be52b3459a3966e82bbf0f160f13f2fcbc2ae06f296271f19bc8fef67e038b12746fc863e76df2929ee6f2f18b604825615179da99d6a62f9e6ac6ce88f4b80c1399c9e81b734c938b34cfc1147e111bafa2ccab786cc6649baa61e45f6bf8a7a41607052207f00b3fa1c10c518804d19de55af182019ee32d99405dedfd970cd0be57953b26c6b6ca3343e25a39936583cad9894e209a38c09eb8bd74d4df99812c8a939001f0242c544b43e5f853c02de949a29a8"
            , "speed": "57600"
            , "use_1200bps_touch": "true"
            , "wait_for_upload_port": "true"
        }
        , "params": {
            "noverify": "-V"
            , "quiet": "-q -q"
            , "verbose": "-v"
        }
        , "tool": "avrdude"
        , "tool_version": "6.3.0-arduino8"
    }]
    , "vid": ["0x2341", "0x2A03", "0x2341", "0x2341", "0x2341", "0x2A03"]
}, {
    "architecture": "samd"
    , "bootloader": {
        "commandline": ""
        , "signature": "55664ae12c257330bf47f8db4c66d0f46a0f0ff1d1c70e6f345def1f91db21044bcba010b5b7a33aaa97ee65e19baa68ccb0e198af486252ca42911d5a5660e2f6b5f5d0d76f6ec2eb9594238abb857fe5c3fc1263d1861f5e9adbe78eb108acfcd07701e7148b605031ecab5b780c210d2e409e061cfb24fc4aaada046e295ebdd986adec9d9ac1faacfbce4d55c36c0fe98e40268f3aef7708d250819a005184ae01285866712f28bbcd092da5b9d4a4f7b67d98f81856244a2e7c09b8eb54e5dff3ca60051634c3a05c6410ff3fa78bf1ba2ac0c6b36015a0eba35119211574b3d4ca8ab3dd2a144d1da50212972038359e6603c8d5ee26b4931b9f18d2aa"
    }
    , "build": [{
        "flavour": "default"
        , "fqbn": "arduino:samd:mzero_pro_bl"
    }]
    , "default_flavour": "default"
    , "fqbn": "arduino:samd:mzero_pro_bl"
    , "id": "mzero_pro_bl"
    , "name": "Arduino M0 Pro (Native USB Port)"
    , "package": "arduino"
    , "pid": ["0x2a03", "0x2a03", "0x2a03", "0x2a03"]
    , "upload": [{
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {upload.verbose} -patmega2560 -cstk500v2 -P{serial.port} -b57600 \"-Uflash:w:{build.path}/{build.project_name}.hex:i\""
        , "ext": ".hex"
        , "flavour": "default"
        , "options": {
            "maximum_size": "262144"
            , "native_usb": "true"
            , "protocol": "stk500v2"
            , "signature": "83d16d41d9fda0f175d98b091f6f29af5980b187bf4ceead16d160f832021b66650521e3e7d2232be0908a7cdce6096d0a28df3ebe08471ecb7c5bd4552f555ca28e8c1c62b580b4f290f5850516e0612f00619de657dd3ffff9b11f60cd66d96656c9e40e927a3462029f403fe772554c6ea35324744be85fcef85e75e775877054722f6f09789de5173d12d6061497fedbff69f4d412808b69ef54e06d3600681a1bb90568c100e7d789d43b939a04069c694976fe05fd6e7c8e5ff5ec0e2ed6d056e8f4b34691438c2882b475f7a0b641b4b7978d06d24bb45f7176329a3711eb974f4586cb27005672d239d4cccfb799c2d41ce962419d7244aefe0a8f08"
            , "speed": "57600"
            , "use_1200bps_touch": "true"
            , "wait_for_upload_port": "true"
        }
        , "params": {
            "noverify": "-V"
            , "quiet": "-q -q"
            , "verbose": "-v -v"
        }
        , "tool": "avrdude"
        , "tool_version": "6.3.0-arduino8"
    }]
    , "vid": ["0x2a03", "0x2a03", "0x2a03", "0x2a03"]
}, {
    "architecture": "avr"
    , "bootloader": {
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {bootloader.verbose} -patmega32u4 -c{protocol} {program.extra_params} \"-Uflash:w:{runtime.platform.path}/bootloaders/caterina/Caterina-Yun.hex:i\" -Ulock:w:0x2F:m"
        , "signature": "65b1b654c893a883364cd6d43fe7b6ca83065b72e406bba1979125c4eaf356b857ae3a90e5e2df9ef1eb20ed748d040458574a9e22ce965bd4170fe71768df02d64d5f288850c014b84e201fd95d69612f1160cfa88e13cc2dfd345b422306fe663e2da72a1e10470bdd4ccf62fc2110d7af2372e02b096977a9f939319b8dc699a84c91a0aec86edf1cc51cb1a1456a582123f41cc795cd688072916a806ad487f67a521786e6934af1d51595d051cd4a10e8b0a34dd4942cd7e1b0f00365c00a37a1c935f5bf5677f2b2be81a5e494f95270788ef3c5825edb01bda9b516ea3ede912314358838db8d5b19360c8971329e6931aa30e1cd37cbfe3b9eee602a"
    }
    , "build": [{
        "flavour": "default"
        , "fqbn": "arduino:avr:yun"
    }]
    , "default_flavour": "default"
    , "fqbn": "arduino:avr:yun"
    , "id": "yun"
    , "name": "Arduino Yún"
    , "package": "arduino"
    , "pid": ["0x2341", "0x2341", "0x2A03", "0x2A03"]
    , "upload": [{
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {upload.verbose}  -patmega32u4 -cavr109 -P{serial.port} -b57600 -D \"-Uflash:w:{build.path}/{build.project_name}.hex:i\""
        , "ext": ".hex"
        , "flavour": "default"
        , "options": {
            "disable_flushing": "true"
            , "maximum_data_size": "2560"
            , "maximum_size": "28672"
            , "protocol": "avr109"
            , "signature": "15a80bb8e911d82ee8c36d14bc5c00348f307ac8eaba5357366eeeb776a2e4eefa85a061d22ebde27482841de67e95d471700e8487adf3adda94d2b1091c68ab4d5b5098ad6f3f0e63878be52b3459a3966e82bbf0f160f13f2fcbc2ae06f296271f19bc8fef67e038b12746fc863e76df2929ee6f2f18b604825615179da99d6a62f9e6ac6ce88f4b80c1399c9e81b734c938b34cfc1147e111bafa2ccab786cc6649baa61e45f6bf8a7a41607052207f00b3fa1c10c518804d19de55af182019ee32d99405dedfd970cd0be57953b26c6b6ca3343e25a39936583cad9894e209a38c09eb8bd74d4df99812c8a939001f0242c544b43e5f853c02de949a29a8"
            , "speed": "57600"
            , "use_1200bps_touch": "true"
            , "via_ssh": "true"
            , "wait_for_upload_port": "true"
        }
        , "params": {
            "noverify": "-V"
            , "quiet": "-q -q"
            , "verbose": "-v"
        }
        , "tool": "avrdude"
        , "tool_version": "6.3.0-arduino8"
    }]
    , "vid": ["0x2341", "0x2341", "0x2A03", "0x2A03"]
}, {
    "architecture": "samd"
    , "bootloader": {
        "commandline": "\"{runtime.tools.openocd-0.9.0-arduino.path}/bin/openocd\" {bootloader.verbose} -s \"{runtime.tools.openocd-0.9.0-arduino.path}/share/openocd/scripts/\" -f \"{runtime.platform.path}/variants/circuitplay/openocd_scripts/arduino_zero.cfg\" -c \"telnet_port disabled; init; halt; at91samd bootloader 0; program {{{runtime.platform.path}/bootloaders/circuitplay/circuitplay_m0_samd21g18_sam_ba.bin}} verify reset; shutdown\""
        , "signature": "27c284a5a8b711a23ad1469a54ba09bc11cf61f55240e3c65476b2466890797ab3162850f672bd017672e34978ff0ab452844082f2455ca9aa0bb531bcd4121b4ae8ab14176fc6b84af1459f4a7f7dfdbac694eb95e14ccc900b8820153d1d53ba09f906c6a417340d7cc4b2fdb0a8168856b500d74049f756d68a983046ea31941d7f653dc8507b8671db03573eaf34502303cbed95d1e739ee376880d40202df09d1d196e6a3a5d32a7e087ad943a5edaa1b685e9f726b578a31d77d3fa5e2c39524805d2de6c9880c9406c55e7dfdd88710a404cb06413ac47df12825c23ea37f8e13a8f8550e3e2c0c220779d3bbc141255aff73eee2cf282314157da61e"
    }
    , "build": [{
        "flavour": "default"
        , "fqbn": "arduino:samd:adafruit_circuitplayground_m0"
    }]
    , "default_flavour": "default"
    , "fqbn": "arduino:samd:adafruit_circuitplayground_m0"
    , "id": "adafruit_circuitplayground_m0"
    , "name": "Adafruit Circuit Playground Express"
    , "package": "arduino"
    , "pid": ["0x239A", "0x239A"]
    , "upload": [{
        "commandline": "\"{runtime.tools.bossac-1.7.0.path}/bossac\" {upload.verbose} --port={serial.port.file} -U true -i -e -w -v \"{build.path}/{build.project_name}.bin\" -R"
        , "ext": ".bin"
        , "flavour": "default"
        , "options": {
            "maximum_size": "262144"
            , "native_usb": "true"
            , "protocol": "sam-ba"
            , "signature": "66695789d14908f52cb1964da58ec9fa816d6ddb321900c60ad6ec2d84a7c713abb2b71404030c043e32cf548736eb706180da8256f2533bd132430896437c72b396abe19e632446f16e43b80b73f5cf40aec946d00e7543721cc72d77482a84d2d510e46ea6ee0aaf063ec267b5046a1ace36b7eb04c64b4140302586f1e10eda8452078498ab5c9985e8f5d521786064601daa5ba2978cf91cfeb64e83057b3475ec029a1b835460f4e203c1635eaba812b076248a3589cd5d84c52398f09d255f8aae25d66a40d5ab2b1700247defbdfd044c77d44078197d1f543800e11f79d6ef1c6eb46df65fe2fffd81716b11d798ba21a3ca2cb20f6d955d8e1f8aef"
            , "use_1200bps_touch": "true"
            , "wait_for_upload_port": "true"
        }
        , "params": {
            "quiet": ""
            , "verbose": "-i -d"
        }
        , "tool": "bossac"
        , "tool_version": "1.7.0"
    }]
    , "vid": ["0x239A", "0x239A"]
}, {
    "architecture": "avr"
    , "bootloader": {
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {bootloader.verbose} -pattiny85 -c{protocol} {program.extra_params} \"-Uflash:w:{runtime.platform.path}/bootloaders/gemma/gemma_v1.hex:i\" -Ulock:w::m"
        , "signature": "865898aaa2bbe1088a61a1fada691fa5c2f5158081eb03408de5c8a8f85d46e7521af8617437f0be7c8380f15787836823ff2e7caa99f6e8b7d0617b80dd2599342484be36dd240fd8ec4735dfada5251b872cf44256d6b14b05f2bb98930d9b723903eb3ec1a64da868b83df85920d9e33258ac3d1996954b6acb8bf309e2d6ae7c84cdbf548f4b68b84a144ce4c4091feb3648bbf705024edef5ee1f861ee2ed105ef6a14646fdfa31debf2aa8d68093326700d5c73156f1b8f0e3fd3968e7fd779ba7b99041a68c188c82ae3d58dd7c683efd53184d627623e6c26556fc7f1771baef928316eb6c7ddca4132d36489cec5f6fd23ed2566995ddbd1be09662"
    }
    , "build": [{
        "flavour": "default"
        , "fqbn": "arduino:avr:gemma"
    }]
    , "default_flavour": "default"
    , "fqbn": "arduino:avr:gemma"
    , "id": "gemma"
    , "name": "Arduino Gemma"
    , "package": "arduino"
    , "pid": ["0x2341"]
    , "upload": [{
        "commandline": "\"{runtime.tools.avrdude.path}/bin/avrdude\" \"-C{runtime.tools.avrdude.path}/etc/avrdude.conf\" {upload.verbose}  -pattiny85 -c{upload.protocol} -P{serial.port} -b{upload.speed} -D \"-Uflash:w:{build.path}/{build.project_name}.hex:i\""
        , "ext": ".hex"
        , "flavour": "default"
        , "options": {
            "maximum_size": "5310"
            , "signature": "9899a1e56b94c2af8f49dfc16e4500a82f971483ff056fb4b18bcb4fbae1aae1d8a669981c6573793527ce315aa613bf4f30cb54df0e6ff9c7a96e917a21a55aece0911b66749087a180711635cb3037e5b1ece5c648f11d92c8ca54353b5fe67caabe3e899ac9aec506faddc1dac797f0f485aa337da2212a25498633442fb65462d0ecfbf7b06827f9ffca7aa73aa020c1b460224ff128465547719b75084f3e62c1b8851a959cf57d7eb2e6bb8c0c02994cec329f9214b447a33801fcbf62383f96937337d3a0b83297c821ca589df98f48bb82d49f1ea611fe214359dff3632f31e43e0713834428aa5459716775075e584fdb1e1bf789e338bfa4f3378f"
        }
        , "params": {
            "noverify": "-V"
            , "quiet": "-q -q"
            , "verbose": "-v"
        }
        , "tool": "avrdude"
        , "tool_version": "6.3.0-arduino8"
    }]
    , "vid": ["0x2341"]
}]