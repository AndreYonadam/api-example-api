let defaultString = "Default Message"

export function messageGuard(messageGuard: String): String {
    if (messageGuard == null || messageGuard == "") {
        return defaultString
    }
    else {
        return messageGuard
    }
}