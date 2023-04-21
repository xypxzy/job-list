import { JobPositionProps } from "./JobPosition.props.ts";
import { Card } from "../Card/Card.tsx";
import styles from "./JobPosition.module.css";
import { Stack } from "../Stack/Stack.tsx";
import { Badge } from "../Badge/Badge.tsx";
export function JobPosition({
  company,
  logo,
  new: isNew,
  featured,
  role,
  position,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
}: JobPositionProps) {
  let badges: string[] = [];
  badges = badges.concat(role, level, ...languages, ...tools);
  return (
    <Card isFeatured={featured}>
      <div className={styles.position}>
        <div className={styles.positionInfo}>
          <img className={styles.avatar} src={logo} alt={company} />

          <div className={styles.positionBody}>
            <div className={styles.positionCompany}>
              <h3>{company}</h3>
              {(isNew || featured) && (
                <Stack>
                  {isNew && (
                    <Badge variant="rounded" colorScheme="primary">
                      NEW!
                    </Badge>
                  )}
                  {featured && (
                    <Badge variant="rounded" colorScheme="dark">
                      FEATURED
                    </Badge>
                  )}
                </Stack>
              )}
            </div>
            <h2 className={styles.positionTitle}>{position}</h2>
            <Stack>
              <div className={styles.positionMeta}>{postedAt}</div>
              <div className={styles.positionMeta}>{contract}</div>
              <div className={styles.positionMeta}>{location}</div>
            </Stack>
          </div>
        </div>
        <Stack>
          {badges.map((item) => (
            <Badge variant={"rounded"} key={item}>
              {item}
            </Badge>
          ))}
        </Stack>
      </div>
    </Card>
  );
}
