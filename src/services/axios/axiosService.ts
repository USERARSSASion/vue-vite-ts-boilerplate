import { apiClient } from './config';
import { AxiosError, AxiosResponse } from 'axios';
import surePromise from '@/shared/utils/surePromise';
import { useLoadingStore } from '@/store/loading';
const useLoading = useLoadingStore();

export class AxiosService<T, U> {
  async postData(postData: U, url: string): Promise<SurePromise<T>> {
    useLoading.start('Cargando...')
    try {
      return await surePromise(apiClient.post<AxiosResponse>(url, postData));
    } catch (err: unknown) {
      // @ts-ignore
      if (err && err.response) {
        const axiosError = err as AxiosError
        const toast: Toast = {
          body: axiosError.response?.data.message,
          tittle: 'Error',
          type: 'error',
          show: true
        }
      }
      throw err
    } finally {
      useLoading.finish()
    }
  }
}

export const axiosSingleton = function <T, U>()  {
  return new AxiosService<T, U>()
}
