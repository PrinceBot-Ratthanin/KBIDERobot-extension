module.exports = [
    {
        name: "KBIDERobot",
        blocks: [
            {
                xml: `<sep gap="32"></sep><label text="MotorKB Plugin for OpenKB board" web-class="headline"></label>`
            },
            {
                xml: `<sep gap="32"></sep><label text="GPIO" web-class="headline"></label>`
            },
            'KBIDERobot_setup',
            /*'motorKB_reset',
            'motorKB_digital_read',
            {
                xml:
                `<block type="motorKB_digital_write">
                    <value name="value">
                        <shadow type="math_number">
                            <field name="NUM">1</field>
                        </shadow>
                    </value>
                </block>`
            },
            "motorKB_analog_read",
            {
                xml: `<sep gap="32"></sep><label text="Servo Motor" web-class="headline"></label>`
            },
            {
                xml:
                `<block type="motorKB_servo">
                    <value name="angle">
                        <shadow type="math_number">
                            <field name="NUM">90</field>
                        </shadow>
                    </value>
                </block>`
            },
            {
                xml:
                `<block type="motorKB_servo2">
                    <value name="speed">
                        <shadow type="math_number">
                            <field name="NUM">100</field>
                        </shadow>
                    </value>
                </block>`
            },
            {
                xml: `<sep gap="32"></sep><label text="DC Motor" web-class="headline"></label>`
            },
            "motorKB_motor_stop",
            {
                xml:
                `<block type="motorKB_motor">
                    <value name="speed">
                        <shadow type="math_number">
                            <field name="NUM">100</field>
                        </shadow>
                    </value>
                </block>`
            },
            {
                xml:
                `<block type="motorKB_motor_forward2">
                    <value name="speed1">
                        <shadow type="math_number">
                            <field name="NUM">100</field>
                        </shadow>
                    </value>
                    <value name="speed2">
                        <shadow type="math_number">
                            <field name="NUM">100</field>
                        </shadow>
                    </value>
                </block>`
            },
            {
                xml:
                `<block type="motorKB_motor_backward2">
                    <value name="speed1">
                        <shadow type="math_number">
                            <field name="NUM">100</field>
                        </shadow>
                    </value>
                    <value name="speed2">
                        <shadow type="math_number">
                            <field name="NUM">100</field>
                        </shadow>
                    </value>
                </block>`
            },
            {
                xml:
                `<block type="motorKB_motor_forward">
                    <value name="speed">
                        <shadow type="math_number">
                            <field name="NUM">100</field>
                        </shadow>
                    </value>
                </block>`
            },
            {
                xml:
                `<block type="motorKB_motor_backward">
                    <value name="speed">
                        <shadow type="math_number">
                            <field name="NUM">100</field>
                        </shadow>
                    </value>
                </block>`
            },
            {
                xml:
                `<block type="motorKB_motor_turn_left">
                    <value name="speed">
                        <shadow type="math_number">
                            <field name="NUM">100</field>
                        </shadow>
                    </value>
                </block>`
            },
            {
                xml:
                `<block type="motorKB_motor_turn_right">
                    <value name="speed">
                        <shadow type="math_number">
                            <field name="NUM">100</field>
                        </shadow>
                    </value>
                </block>`
            },
            {
                xml:
                `<block type="motorKB_motor_spin_left">
                    <value name="speed">
                        <shadow type="math_number">
                            <field name="NUM">100</field>
                        </shadow>
                    </value>
                </block>`
            },
            {
                xml:
                `<block type="motorKB_motor_spin_right">
                    <value name="speed">
                        <shadow type="math_number">
                            <field name="NUM">100</field>
                        </shadow>
                    </value>
                </block>`
            },
            {
                xml: `<sep gap="32"></sep><label text="Serial" web-class="headline"></label>`
            },
            "motorKB_serial_config",
            "motorKB_serial_available",
            {
                xml:
                `<block type="motorKB_serial_write">
                    <value name="data">
                        <shadow type="basic_string">
                        </shadow>
                    </value>
                </block>`
            },
            {
                xml:
                `<block type="motorKB_serial_write_line">
                    <value name="data">
                        <shadow type="basic_string">
                        </shadow>
                    </value>
                </block>`
            },
            "motorKB_serial_read_one_byte",
            "motorKB_serial_read_string",
            "motorKB_serial_read_line",
            "motorKB_serial_read_until"*/
        ]
    }
];