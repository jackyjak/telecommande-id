makerbit.onIrButton(IrButton.Any, IrButtonAction.Pressed, function () {
    serial.writeValue(makerbit.irDatagram(), makerbit.irButton())
    basic.showNumber(makerbit.irButton())
})
makerbit.connectIrReceiver(DigitalPin.P2, IrProtocol.Keyestudio)
basic.showIcon(IconNames.Yes)
