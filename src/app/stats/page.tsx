import cx from 'classnames'
import type { Metadata } from 'next'

import Container from '@/components/container'
import PageHeader from '@/components/page-header'
import {
  GithubStats,
  TotalEndorsements,
  TotalReactions,
  TotalViews,
} from '@/components/statistics'
import { getMetadata } from '@/lib/metadata'

export const metadata: Metadata = getMetadata({
  title: 'Stats',
  description: 'Statistics about my digital home, Github, and more',
  keywords: ['statistics', 'stats', 'dashboard', 'github'],
})

const StatsPage = () => {
  return (
    <>
      <PageHeader title="Stats" />
      <div id="content">
        <Container>
          <div
            className={cx(
              'grid grid-cols-1 grid-flow-row auto-rows-auto gap-4',
              'sm:grid-cols-2',
              'lg:grid-cols-3',
            )}
          >
            <TotalViews />
            <TotalReactions />
            <TotalEndorsements />
            <GithubStats />
          </div>
        </Container>
      </div>
    </>
  )
}

export default StatsPage
