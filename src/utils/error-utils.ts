import { RequestStatusType } from '../common/enums/enums'
import { appActions } from '../redux/commonActions/appActions'

type ThunkAPIType = {
  dispatch: (action: any) => any
  rejectWithValue: Function
}

export const handleAsyncServerNetworkError = (
  error: any,
  thunkAPI: ThunkAPIType,
  showError = true,
) => {
  let errorMessage = 'Произошла какая-то ошибка'

  if (error.response) {
    if (error.response.status >= 500) {
      errorMessage = 'Ошибка сервера. Пожалуйста, повторите попытку позже'
    } else if (error.response.status == 404) {
      errorMessage = 'Страница не найдена'
    }
  } else if (error.request) {
    errorMessage =
      'Ошибка сети. Проверьте подключение к Интернету и повторите попытку'
  } else {
    errorMessage = error.message ? error.message : errorMessage
  }

  if (showError) {
    thunkAPI.dispatch(
      appActions.setError({
        error: errorMessage,
      }),
    )
    thunkAPI.dispatch(
      appActions.setStatus({ status: RequestStatusType.failed }),
    )
    return thunkAPI.rejectWithValue(error.message)
  }
  // return thunkAPI.rejectWithValue(error.message)
  return errorMessage
}
