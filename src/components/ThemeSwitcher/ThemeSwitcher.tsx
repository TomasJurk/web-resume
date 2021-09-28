import './ThemeSwitcher.css';

type ThemeSwitcherProps = {
    darkTheme: boolean
    clicked: () => void
}

export const ThemeSwitcher = ({ darkTheme, clicked }: ThemeSwitcherProps) => (
    <div className="themeSwitcher" style={darkTheme ? {borderColor: 'rgb(var(--lightTheme))'} : undefined} onClick={clicked}>
        <span style={darkTheme ? {marginLeft: 'auto'} : undefined} />
    </div>
)
