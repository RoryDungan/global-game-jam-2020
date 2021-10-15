const audioService = require("./audioService")
// @ponicode
describe("audioService.playSound", () => {
    test("0", () => {
        let callFunction = () => {
            audioService.playSound(0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            audioService.playSound(-29.45)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            audioService.playSound(10.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            audioService.playSound(1.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            audioService.playSound(-0.5)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            audioService.playSound(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
