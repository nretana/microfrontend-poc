import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { themeConfig } from '@/core/configs/theme.config'
import { LAYOUT_TYPE_CLASSIC } from '@/core/constants/theme.constant'
import type { LayoutType } from '@/core/@core-types/theme'

export type ThemeState = {
    panelExpand: boolean
    layout: {
        type: LayoutType
        sideNavCollapse: boolean
        previousType?: LayoutType
    }
}

const initialState: ThemeState = {
    panelExpand: themeConfig.panelExpand,
    layout: themeConfig.layout,
}

const availableNavColorLayouts = [
    LAYOUT_TYPE_CLASSIC
]

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setLayout: (state, action: PayloadAction<LayoutType>) => {

            const availableColorNav = availableNavColorLayouts.includes(
                action.payload
            )

            state.layout = {
                ...state.layout,
                ...{ type: action.payload },
            }
        },
        setPreviousLayout: (state, action) => {
            state.layout.previousType = action.payload
        },
        setSideNavCollapse: (state, action) => {
            state.layout = {
                ...state.layout,
                ...{ sideNavCollapse: action.payload },
            }
        },
        setPanelExpand: (state, action: PayloadAction<boolean>) => {
            state.panelExpand = action.payload
        }
    },
})

export const {
    setLayout,
    setSideNavCollapse,
    setPanelExpand,
    setPreviousLayout,
} = themeSlice.actions

export default themeSlice.reducer
