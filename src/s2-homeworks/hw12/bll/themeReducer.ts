const initState = {
    themeId: 1,
}

export type initStateType = {
    themeId: number
}

export const themeReducer = (state = initState, action: ActionType): initStateType => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":
            return {themeId: action.id}
        default:
            return state
    }
}

type ActionType = ReturnType<typeof changeThemeId>

export const changeThemeId = (id: number) => ({type: 'SET_THEME_ID', id} as const) // fix any
