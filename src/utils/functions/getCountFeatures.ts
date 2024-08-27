import {
  FeatureItem,
  TransformFeatureItem,
} from '../../redux/types/rentalObjectTypes'
import { FEATURES_OPTIONS } from '../constants'

export const getCountFeatures = (features: FeatureItem[]) => {
  return features
    .map((featuresItem: FeatureItem) => {
      const featureOption = FEATURES_OPTIONS.find((option: any) => {
        return option.value === featuresItem.logo
      })

      if (featureOption) {
        return {
          name: featuresItem.name,
          logo: featureOption.label,
          title:
            featuresItem.logo === 'star' || featuresItem.logo === 'diamond'
              ? featuresItem.name &&
                featuresItem.name[0]?.toUpperCase() + featuresItem.name.slice(1)
              : // featuresItem.name
                featureOption.title,
        }
      }

      return null
    })
    .filter(
      (featuresItem: TransformFeatureItem | null) => featuresItem !== null,
    )
}
