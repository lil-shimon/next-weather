import {FC} from "react";
import {Forecast, Forecasts} from "../index";
import {Card, CardContent, Typography} from "@mui/material";
import {makeStyles} from '@material-ui/styles'

interface Props {
    forecasts: Forecasts
    title: string
}

/**
 * WeatherのUI Component
 * @constructor
 */
export const WeatherPresenter: FC<Props> = ({forecasts, title}) => {
    return (
        <div>
            <p className={"text-center text-3xl"}>{title}</p>
            {forecasts && forecasts.map((forecast: Forecast) => (
                <WeatherByDay forecast={forecast}/>
            ))}
        </div>
    )
}

interface DayProps {
    forecast: Forecast
}

const WeatherByDay: FC<DayProps> = ({forecast}) => {

    const useStyles = makeStyles({
        container: {
            alignItems: 'center',
            padding: "3% 0",
            margin: "3% 0"
        }
    })

    const classes = useStyles()

    return (
        <div className={classes.container}>
        <Card sx={{minWidth: 275}} >
            <CardContent>
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    {forecast.date}
                </Typography>
                <Typography variant="h5" component="div">
                    {forecast.dateLabel}
                </Typography>
                <Typography sx={{mb: 1.5}} color="text.secondary">
                    {forecast.detail.wave}
                </Typography>
                <Typography variant="body2">
                    {forecast.detail.weather}
                </Typography>
                <div>{forecast.detail.wind}</div>
                <div>{forecast.chanceOfRain.T00_06}</div>
                <div>{forecast.chanceOfRain.T06_12}</div>
                <div>{forecast.chanceOfRain.T12_18}</div>
                <div>{forecast.chanceOfRain.T18_24}</div>
            </CardContent>
        </Card>
        </div>
    )
}