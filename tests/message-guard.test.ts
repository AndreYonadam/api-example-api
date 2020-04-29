import { messageGuard } from '../support/message-guard';

describe("Message Guard", () => {
    test("should return the default message", () => {
        let defaultMessage = "Default Message"
        expect(messageGuard(null)).toEqual(defaultMessage);
        expect(messageGuard("")).toEqual(defaultMessage);
    });
});

describe("Message Guard", () => {
    test("should return the same message provided", () => {
        let providedMessage = "My message"
        expect(messageGuard(providedMessage)).toEqual(providedMessage);
    });
});